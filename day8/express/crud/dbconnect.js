const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/srmap";

mongoose
  .connect(connectionString)
  .then((result) => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Connection error: " + err);
  });
