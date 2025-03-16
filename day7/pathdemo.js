// console.log(__dirname);
// console.log(__filename);
const path = require("path");
let fileName = "sample.txt";
let completePathName = path.join(__dirname, "data", fileName);
console.log(completePathName);
