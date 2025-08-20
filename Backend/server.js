require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');
const httpServer = require('http').createServer(app);
const initSocketServer = require('./src/sockets/socket.server');

connectDB();
initSocketServer(httpServer);

httpServer.listen(3000, () => {
    console.log('Server is running on port 3000');
})