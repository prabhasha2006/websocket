const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:4000');
// Create a WebSocket server and listen on port 3000
const server = new WebSocket.Server({ port: 4000 });

// Event listener for when a client connects to the server
server.on('connection', (socket) => {
  console.log('Client connected');

  // Event listener for messages from the client
  socket.on('message', (message) => {
    console.log(`Received: ${message}`);

    // Echo the message back to the client
    socket.send(`Server: ${message}`);
  });

  // Event listener for when the client closes the connection
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});