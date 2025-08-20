const express = require('express');
const cookieParser = require('cookie-parser');

/* Routes import */
const authRoutes = require('./routes/auth.routes');
const chatRoutes = require('./routes/chat.routes');

const app = express();

// use middlewares 
app.use(express.json());
app.use(cookieParser());

// use routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);


module.exports = app;