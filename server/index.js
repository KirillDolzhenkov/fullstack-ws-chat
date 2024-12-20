const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');
const app = express();
const route = require('./route');
const PORT = 5000;

app.use(cors({origin: '*'}));
app.use(route);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {

    socket.on('join', (data) => {
        const {name, room} = data
        socket.join(room);

        socket.emit('message', {
            data: {user: {name: 'Admin'}, message: `user ${name} has joined the room ${room}`},
        })
    })

    io.on('disconnect', () => {
        console.log('user disconnected');
    })
})

server.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
})