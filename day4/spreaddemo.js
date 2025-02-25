function sum(x, y, ...args) {
  let total = x + y;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

let salaryList = [10, 20, 12, 15, 17, 21, 19];
// console.log("Maximum salary : " + Math.max(...salaryList));
// console.log(sum(10, 20, 30, 40));
// console.log(sum(...salaryList));
// console.log(sum(100, 200, ...salaryList));
let array1 = salaryList;
let array2 = [-1, -2, ...salaryList, -23, 10];
let mergeArray = [...array1, ...array2];
array1.push(143);
array2.push(...[1, 2, 3, 4, 5]);
// salaryList.forEach((data) => console.log(data));
// array2.forEach((data) => console.log(data));
console.log(mergeArray.indexOf(10));
console.log(mergeArray.length);
console.log(mergeArray.lastIndexOf(10));
console.log(mergeArray.includes(-123));
