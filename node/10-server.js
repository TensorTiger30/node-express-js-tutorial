// Code to host basic server using Node JS
const http = require("http");

// Define server port
const SERVER_PORT = 8080;

// Instantiate Server object
const server = http.createServer((req, res) => {
  console.log("Request Event!");
  res.end("Hello World!");
});

// Spin up the server, and listen for requests on SERVER_PORT
server.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
