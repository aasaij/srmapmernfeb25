const http = require("http");

const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>My First Node.js Server</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Hello World!</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>404 Not Found</h1></body></html>");
  //   process.exit(0);
});
server.listen(port, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
