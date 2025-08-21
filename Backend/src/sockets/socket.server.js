const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model'); 
const aiService = require('../services/ai.service');
const messageModel = require('../models/message.model'); 

async function initSocketServer(httpServer) {
  const io = new Server(httpServer, {});

  // Middlware to ensure that the socket connection is established only for authenticated users
  io.use(async (socket, next) => {

    const cookies = cookie.parse(socket.handshake.headers?.cookie || '');
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

  })

  io.on("connection", (socket) => {
    
    socket.on("user-message", async (messagePayload) => {
      
      await messageModel.create({
        user: socket.user._id,
        chat: messagePayload.chat,
        content: messagePayload.content,
        role: "user",
      })

      const chatHistory = await messageModel.find({
        chat: messagePayload.chat,
      })

      const response = await aiService.generateResponse(chatHistory.map(item => {
        return {
          role: item.role,
          parts: [ { text: item.content } ],
        }
      }));

      await messageModel.create({
        chat: messagePayload.chat,
        user: socket.user._id,
        content: response,
        role: "model",
      })

      // Emit the AI response back to the user
      socket.emit("ai-response", {
        content: response,
        chat: messagePayload.chat,
      });

    })
  });
}

module.exports = initSocketServer;
