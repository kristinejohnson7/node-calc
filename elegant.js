var rs = require("readline-sync");

let splitString;
let answer;

function findOperator(string) {
  if (string.includes("-")) {
    operator = "-";
    return operator;
  } else if (string.includes("+")) {
    operator = "+";
    return operator;
  } else if (string.includes("/")) {
    operator = "/";
    return operator;
  } else if (string.includes("*")) {
    operator = "*";
    return operator;
  }
}

function nodeCalculator(left, right) {
  if (operator === "-") {
    answer = Number(left) - Number(right);
  } else if (operator === "+") {
    answer = Number(left) + Number(right);
  } else if (operator === "/") {
    answer = Number(left) / Number(right);
  } else if (operator === "*") {
    answer = Number(left) * Number(right);
  }
  console.log(`The result is: ${answer.toFixed(2)}`);
}

function start() {
  string = rs.question("Enter your math operation: ");
  splitString = string.indexOf(findOperator(string));
  leftSide = string.slice(0, splitString);
  rightSide = string.slice(splitString + 1);
}

start();
nodeCalculator(leftSide, rightSide);
