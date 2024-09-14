const http = require("http");

const SERVER_PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`Hello from our home page ${SERVER_PORT}`);
  }
  if (req.url === "/about") {
    res.end(`Hello from our about page ${SERVER_PORT}`);
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `);
});

server.listen(SERVER_PORT);
