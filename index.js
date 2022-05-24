var rs = require("readline-sync");
let selectOperation = "";
let checkOperand = true;

function getNumbers() {
  firstNum = rs.questionInt("Please enter the first number. ");
  secondNum = rs.questionInt("Please enter the second number. ");
}

function nodeCalculator(first, second) {
  let answer;
  if (selectOperation === "+") {
    answer = first + second;
  }
  if (selectOperation === "-") {
    answer = first - second;
  }
  if (selectOperation === "*") {
    answer = first * second;
  }
  if (selectOperation === "/") {
    answer = first / second;
  }
  console.log(`The result is: ${answer.toFixed(2)}`);
}

function start() {
  selectOperation = rs.question("What operation would you like to perform? ");
  while (checkOperand) {
    if (
      selectOperation === "+" ||
      selectOperation === "-" ||
      selectOperation === "*" ||
      selectOperation === "/"
    ) {
      getNumbers();
      nodeCalculator(firstNum, secondNum);
      break;
    } else {
      console.log("That is not a valid operation");
      start();
    }
  }
}

start();
