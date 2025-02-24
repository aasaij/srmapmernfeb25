var systemNumber = Math.floor(Math.random() * 10 + 1);
var count = 0;
let checkValue = () => {
  if (count < 3) {
    let userNumber = Number(document.getElementById("guessNumber").value);
    if (isNaN(userNumber)) {
      alert("Please enter a valid number!");
      return;
    }
    if (userNumber === systemNumber) {
      document.getElementById("txtResult").value = "Congratulations. You win";
      document.getElementById("txtTips").value = "";
    } else if (userNumber < systemNumber) {
      document.getElementById("txtTips").value = "Too low! Try again.";
    } else {
      document.getElementById("txtTips").value = "Too high! Try again.";
    }
  } else {
    document.getElementById("txtResult").value =
      "System wins. System number is " + systemNumber;
    document.getElementById("txtTips").value = "";
  }
  count++;
};

let newGame = () => {
  count = 0;
  systemNumber = Math.floor(Math.random() * 10 + 1);
  document.getElementById("guessNumber").value = "";
  document.getElementById("txtResult").value = "";
  document.getElementById("txtTips").value = "";
  document.getElementById("guessNumber").focus();
};
