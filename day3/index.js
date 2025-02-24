// let emp = {};
// let emp = new Object();
// emp.firstName = "Avinash";
// emp.lastName = "S";
// emp["salary"] = 500000;
// emp["gender"] = "Male";
// let emp = {
//     firstName : "Vijay",
//     lastName : "Y",
//     salary : 550000,
//     gender : "Male"
// }
function Employee(firstName, lastName, salary, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
  this.gender = gender;
}
let emp1 = new Employee("Vijay", "Y", 550000, "Male");
emp1.department = "ADMIN";
let emp2 = new Employee("Avinash", "S", 6000000, "Male");

// for (let key in emp1) console.log(key + " : " + emp1[key]);
// for (let key in emp2) console.log(key + " : " + emp2[key]);
// for (let emp in [emp1, emp2]) console.log(emp);
// for (let emp of [emp1, emp2]) console.log(emp);
// [emp1, emp2].forEach((emp) => console.log(emp));
for (let index = 0; index < [emp1, emp2].length; index++)
  console.log([emp1, emp2][index]);
