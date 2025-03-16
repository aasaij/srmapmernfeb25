console.log("Good Morning Engineer!");
let list = [10, 20, 30, 40];
let [x, y, ...z] = list;
let person = {
  firstName: "Satyam",
  lastName: "Kumar",
  age: 20,
};
const { firstName, age } = person;
// console.log(x, y);
// console.log(z);
console.log(firstName, age);
