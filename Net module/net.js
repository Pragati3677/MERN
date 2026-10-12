const net = require('net');

const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.write("Welcome to Node.js TCP Server");

    socket.on('data', (data) => {
        console.log("Client says:", data.toString());
    });

    socket.on('end', () => {
        console.log("Client disconnected");
    });
});

server.listen(5000, () => {
    console.log("TCP Server running on port 5000");
});