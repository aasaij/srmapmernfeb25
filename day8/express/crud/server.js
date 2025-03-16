const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./model/Employee");
const PORT = 9000;
const HOST = "localhost";
const app = express();

// Connect to MongoDB

mongoose.connect("mongodb://localhost:27017/srmap");

app.use(express.json());

// CRUD operations
app.post("/employee/add", (req, res) => {
  const employee = new Employee({
    _id: req.body._id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    salary: req.body.salary,
  });

  employee.save();
  res.json(employee);
});
app.get("/employee/get", async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
