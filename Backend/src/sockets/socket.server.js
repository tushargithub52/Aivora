const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model'); 

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
    console.log("A user connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
}

module.exports = initSocketServer;
