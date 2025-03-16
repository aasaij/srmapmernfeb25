// function greet() {
//   console.log("Good Morning!");
// }
// function greet(user) {
//   if (user === undefined || user === null)
//     console.log("Good Morning Engineers!");
//   else console.log(`Good Morning, ${user}!`);
// }
// function greet(user) {
//   //   user = user ?? "Engineers";
//   console.log(`Good Morning, ${user ?? "Engineers"}!`);
// }
//arrow function without parameter
// let greet = () => console.log("Good Morning!");
//arrow function with one parameter
// let greet = (user) => console.log(`Good Morning ${user ?? "Engineers"}!`);
//arrow function with more than one parameters
// let greet = (user, gender) => {
//   gender = gender ?? "";
//   user = user ?? "";
//   let title = "";
//   if (gender.toLowerCase() === "male") title = "Mr. ";
//   else if (gender.toLowerCase() === "female") title = "Ms. ";
//   else title = "";
//   return `Good Morning, ${title}${user}!`;
// };
// greet();
// greet(null);
// greet("Satyam");
// let greeting = greet;
// console.log(greet);

// console.log(greeting());
// console.log(greeting(null));
// console.log(greeting("Satyam", "MALE"));
// console.log(sum(20, 30)); // 5
// function sum(a, b) {
//   return a + b;
// }
// let sum = (a, b) => {
//   return a + b;
// };

let person = {
  firstName: "Vijay",
  lastName: "Y",
  //   getFullName: function () {
  //     return this.firstName + " " + this.lastName;
  //   },
  getFullName: () => "Does nothing",
};
console.log(person.getFullName());
