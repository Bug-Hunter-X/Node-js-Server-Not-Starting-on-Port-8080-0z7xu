const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = process.env.PORT || 8080; // Use environment variable or default port

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Error Handling
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1);
  } else {
    console.error(`Server encountered an error: ${err.message}`);
    process.exit(1);
  }
});