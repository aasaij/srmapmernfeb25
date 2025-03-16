const path = require("path");
const fs = require("fs");

let requestHandler = (req, res) => {
  const pathName = req.url;
  if (pathName === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const fileName = path.join(__dirname, "..", "public", "index.html");
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500);
        res.end("Error loading index.html");
      } else {
        res.write(data);
        return res.end();
      }
    });
  } else if (pathName === "/login") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const fileName = path.join(".", "public", "login.html");
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500);
        res.end("Error loading index.html");
      } else {
        res.write(data);
        return res.end();
      }
      return res.end();
    });
  } else if (pathName === "/employees") {
    res.setHeader("Content-Type", "application/json");
    const fileName = path.join(".", "data", "employees.json");
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500);
        res.end("Error loading employees.json");
      } else {
        res.write(data);
        return res.end();
      }
    });
  } else {
    res.statusCode = 404;
    const fileName = path.join(".", "public", "error.html");
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500);
        res.end("Error loading error.html");
      } else {
        res.write(data);
        return res.end();
      }
    });
  }
};
let Testing = () => {
  console.log("Testing requestHandler");
  return "Testing requestHandler";
};

// module.exports = requestHandler;

// module.exports = {
//   requestHandler,
//   Testing,
// };
module.exports.requestHandler = requestHandler;
module.exports.Testing = Testing;
