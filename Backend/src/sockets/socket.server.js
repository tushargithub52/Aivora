const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const aiService = require("../services/ai.service");
const messageModel = require("../models/message.model");
const { createMemory, queryMemory } = require("../services/vector.service");

async function initSocketServer(httpServer) {
  const io = new Server(httpServer, {});

  // Middlware to ensure that the socket connection is established only for authenticated users
  io.use(async (socket, next) => {
    const cookies = cookie.parse(socket.handshake.headers?.cookie || "");
    const token = cookies.token;

    if (!token) {
      return next(new Error("Authentication error: No token provided"));
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await userModel.findById(decoded.id);

      socket.user = user;

      next();
    } catch (error) {
      return next(new Error("Authentication error"));
    }
  });

  io.on("connection", (socket) => {
    socket.on("user-message", async (messagePayload) => {
      /*
      messagePayload: {
        chat: "chat_id",
        content: "user message"
      }
      */

      //save user message to mongodb
      const message = await messageModel.create({
        user: socket.user._id,
        chat: messagePayload.chat,
        content: messagePayload.content,
        role: "user",
      });

      //create vector embeddings for the user-message
      const vectors = await aiService.generateVector(messagePayload.content);

      //query pinecone i.e. vector database for related memories/vectors
      const memory = await queryMemory({
        queryVector: vectors,
        limit: 3,
        metadata: {
          user: { $eq: socket.user._id},
        },
      });

      //store the user message vector in pinecone
      await createMemory({
        messageID: message._id,
        vectors,
        metadata: {
          user: socket.user._id,
          chat: messagePayload.chat,
          text: messagePayload.content,
        },
      });

      //get last 20 messages for the current chat from mongodb
      const chatHistory = (
        await messageModel
          .find({
            chat: messagePayload.chat,
          })
          .sort({ createdAt: -1 })
          .limit(20)
          .lean()
      ).reverse();

      //short term memory
      const stm = chatHistory.map((item) => {
        return {
          role: item.role,
          parts: [{ text: item.content }],
        };
      });

      //long term memory
      const ltm = [
        {
          role: "user",
          parts: [
            {
              text: `
            These are some previous conversations you had with the user, use them to generate the response

            ${memory.map((item) => item.metadata.text).join("\n")}
          `,
            },
          ],
        },
      ];

      const response = await aiService.generateResponse([...ltm, ...stm]);

      const responseMessage = await messageModel.create({
        chat: messagePayload.chat,
        user: socket.user._id,
        content: response,
        role: "model",
      });

      const responseVectors = await aiService.generateVector(response);

      await createMemory({
        messageID: responseMessage._id,
        vectors: responseVectors,
        metadata: {
          user: socket.user._id,
          chat: messagePayload.chat,
          text: response,
        },
      });

      // Emit the AI response back to the user
      socket.emit("ai-response", {
        content: response,
        chat: messagePayload.chat,
      });
    });
  });
}

module.exports = initSocketServer;
