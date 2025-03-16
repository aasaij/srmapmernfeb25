const http = require("http");
const PORT = 5000;
const HOST = "localhost";
// const handlers = require("./routes/router.js");
const { requestHandler, Testing } = require("./routes/router");
console.log("This is testing");
// const server = http.createServer(handlers.requestHandler);
const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is running at http://${HOST}:${PORT}/`);
  }
});
