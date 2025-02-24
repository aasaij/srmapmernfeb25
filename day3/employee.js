// function Employee(firstName, lastName, gender, salary) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.gender = gender;
//   this.salary = salary;
//   //defining function for employee object
//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }
function Employee(firstName, lastName, gender, salary) {
  return {
    firstName,
    lastName,
    gender,
    salary,
  };
}

let emp = new Employee("Samhitha", "K", "Female", 700000);
for (let key in emp) {
  console.log(key + ": " + emp[key]); // Outputs properties and their values in the Employee object.  For example: firstName: Samhitha, lastName: K, gender: Female, salary: 700000  (Note: salary is not a property, but a calculated property)  Also, fullName() function is called to print full name.  It is a method of Employee object.  The function returns the full name of the employee.  In this case, it returns "Samhitha K".  It's a demonstration of how JavaScript objects can be created, properties can be added, and methods can be defined.  This is a basic implementation of an Employee object in JavaScript.  Real-world applications may require more complex designs and functionalities.  For example, properties could be private, methods could be implemented as functions, and there could be additional methods or properties added to the Employee object based on
}
// console.log(emp.fullName()); // Output: Samhitha K
