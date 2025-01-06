const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');
const app = express();

const route = require('./route');
const { addUser, findUser } = require("./users");

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
        const { name, room } = data
        socket.join(room);

        const { user } = addUser({name, room});

        socket.emit('message', {
            data: {user: {name: 'Admin'}, message: `user ${user.name} has joined the room ${room}`},
        });

        socket.broadcast.to(room).emit('message', {
            data: {user: {name: 'Admin'}, message: `${user.name} has joined`},
        });
    });

    socket.on('sendMessage', (data) => {
        const { message, params } = data;

        if (!params || !params.name || !params.room) {
            console.error('Invalid params:', params);
            return;
        }

        const user = findUser(params);

        if (user) {
            io.to(user.room).emit('message', { data: { user, message } });
        }
    });

    io.on('disconnect', () => {
        console.log('user disconnected');
    })
})

server.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
})