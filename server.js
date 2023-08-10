const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/login") {
    res.end("This is a login page");
  } else {
    res.end("wee");
  }
});

server.listen("8000", () => {
  console.log("Listening to port 8000....");
});
