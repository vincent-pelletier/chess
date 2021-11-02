const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const gameLogic = require('./game-logic');
const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', client => {
    gameLogic.initializeGame(io, client);
    console.log("Ready!");
});

server.listen(process.env.PORT || 8000);