const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  _id: String,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  salary: Number,
});
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee
