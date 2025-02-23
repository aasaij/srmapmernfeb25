// function greet(userName) {
//   let user = "";
//   if (userName == undefined) {
//     user = "Guest";
//   } else {
//     user = userName;
//   }
//   console.log("Good Morning " + user);
// }
// function greet(firstName, lastName) {
//   //   let user = firstName || lastName || "Guest";
//   let user = firstName && lastName && "Guest";
//   console.log("Good Morning " + user);
// }
function greet(firstName, lastName) {
  //termary or conditional operator
  //   let user = firstName ? firstName : lastName ? lastName : "Guest";
  // nullish coalescing operator (??)  - returns the first operand if it is not nullish, otherwise it returns the second operand.
  // if firstName or lastName is nullish, it will return "Guest"
  //   let user = firstName ?? lastName ?? "Guest";
  let user = firstName || lastName || "Guest";
  console.log("Good Morning " + user);
}
greet("Avinash");
greet();
greet("", "Jay");
greet("Hemanth", "Kumar");

/*
Bitwise operators

& - AND operator
| - OR operator
 ^ - XOR operator
 ~ - NOT operator
 << - Left shift operator
 >> - Right shift operator
 >>> - Zero fill right shift operator



*/
