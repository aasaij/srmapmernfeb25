function greet(user) {
  return `Good Morning ${user}`;
}

function addNumbers(a, b) {
  return a + b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

module.exports = {
  greet: greet,
  addNumbers: addNumbers,
  multiplyNumbers: multiplyNumbers,
};
