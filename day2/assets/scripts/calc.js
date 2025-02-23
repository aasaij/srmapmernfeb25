let calculate = (x, y, opr) => {
  switch (opr) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    case "^":
      return x ** y;
  }
};
let operate = () => {
  let x = document.getElementById("num1").value;
  let y = document.getElementById("num2").value;
  let opr;
  if (document.getElementById("add").checked === true) opr = "+";
  else if (document.getElementById("sub").checked === true) opr = "-";
  else if (document.getElementById("mul").checked === true) opr = "*";
  else if (document.getElementById("divide").checked === true) opr = "/";
  else if (document.getElementById("expo").checked === true) opr = "^";
  let result = calculate(Number(x), Number(y), opr);
  //   console.log(result);
  document.getElementById("txtResult").value = "" + result;
};
