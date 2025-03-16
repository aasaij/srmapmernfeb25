const express = require("express");
const PORT = 9000;
const HOST = "localhost";
const app = express();
const students = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];
//middleware
// app.use((req, res, next) => {
//   console.log("This is middleware");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("This is second middleware");
//   next();
// });
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("<h1>Learning Express JS</h1>");
});

app.get("/api/students", (req, res) => {
  res.status(200).json(students);
});
app.get("/api/students/:id", (req, res) => {
  const sid = req.params.id;
  const student = students.find((s) => s.id === parseInt(sid));
  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).send("Student not found");
  }
});
app.post("/api/students/add", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
