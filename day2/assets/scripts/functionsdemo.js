// function greet() {
//   console.log("Good morning!");
// }
// function add(a, b) {
//   return a + b;
// }
//functional expression
// let greet = function () {
//   console.log("Good morning!");
// };
// let add = function (x, y) {
//   return x + y;
// };
//arrow function
// let greet = () => console.log("Good Afternoon!");
// let greet = (userName) =>
//     console.log(`Good afternoon ${userName ?? "Guest"}`);
let greet = (userName, gender) => {
  let title = gender === "F" ? "Ms. " : "Mr. ";
  console.log(`Good afternoon ${title} ${userName}`);
};
// let fullName = (firstName, lastName) => firstName + " " + lastName;
let fullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};
// let add = (x, y) => x + y;
// greet("Avinash", "M");

// greet("Samhitha", "F"); //
// console.log(add(100, 200));
let firstName = prompt("First Name  :   ");
let lastName = prompt("Last Name : ");
console.log(fullName(firstName, lastName));
/*
String
   "Testing"
   'Testing'
   `Testing`
   Syntax for arrow functions
   1. (param1, param2) => { statements }
   2. (param1, param2) => expression
   3. param1 => expression
   4. () => { statements }
   5. () => expression
   6. (param1, param2) =>{
        <statements>
        return expression;
    }
   
*/
