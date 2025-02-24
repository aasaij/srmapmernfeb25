// let nameList = [
//   "Samhitha",
//   "Avinash",
//   "Vijay",
//   "Hemanth",
//   "Samanvitha",
//   "Prathima",
//   "Navya",
// ];

// for (let index = 0; index < nameList.length; index++) {
//   if (nameList[index].endsWith("a"))
//     document.write(nameList[index].toUpperCase() + "<br/>");
// }
// nameList
//   //   .filter((name) => name.endsWith("a"))
//   .sort()
//   .reverse()
//   .forEach((name) =>
//     // document.write("<h1>" + name.toUpperCase() + "</h1>")
//     document.write(`<h1>${name.toUpperCase()}</h1>`)
//   ); // Higher order function
// let dataList = [10, 12, 22, 19, 17, 99, 77, 9, 7];
// dataList
//   .sort((x, y) => y - x)
//   .forEach((data) => document.write(`<h5>${data}<\h5>`));
// nameList
//   .sort((name1, name2) => name1.length - name2.length)
//   .forEach((name) => document.write(`<h1>${name.toUpperCase()}</h1>`));
function Employee(id, name, salary, gender) {
  this.id = id;
  this.name = name;
  this.salary = salary;
  this.gender = gender;
}
let empList = [];
empList.push(new Employee(101, "Vijay", 1000000, "M"));

empList.push(new Employee(102, "Navya", 2000000, "F"));
empList.unshift(new Employee(104, "Roda", 3000000, "F"));

// empList
//   .sort((e1, e2) => e2.salary - e1.salary)
//   .forEach((emp) => document.write(JSON.stringify(emp) + "<br/>"));
// let dataList = [10, 12, 22, 19, 17, 99, 77, 9, 7];
// document.write(dataList + "<br/>");
// dataList
//   .map((data) => {
//     let result = data % 2 == 0 ? data * data : data;
//     return result;
//   })

//   .forEach((data) => document.write(data + ", "));

empList.map((emp) => {
  let salary = emp.salary;
  salary += salary * 0.2;
  emp.salary = salary;
  return emp;
});

//   .forEach((emp) => document.write(JSON.stringify(emp) + "<br/>"));

// let deleteEmp = empList.pop();
// document.write(JSON.stringify(deleteEmp) + "<br/>");
// var deletedEmp = empList.shift();

// document.write(JSON.stringify(deletedEmp) + "<br/>");
// empList.shift();
// var deletedEmp = empList.shift();
// document.write(JSON.stringify(deletedEmp) + "<br/>");

let dataList = [10, 11, 12, 20, 40, 23];
console.log(dataList.reduce((x, y) => x + y));
