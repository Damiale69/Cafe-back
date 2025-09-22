const express = require('express');
const server = express();
const router = require('../routes/routes');
const userRouter = require('../routes/userRouter');

server.use(express.json())




server.use('/',router)
server.use('/user', userRouter);
module.exports = server;