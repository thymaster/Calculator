var currentNum = "";
var result = 0;
var displayText = "";
var previousOperator = "";
var display = document.getElementById("input");

const numKeyClickHandler = (num) => {
  currentNum += num;
  displayText += num;
  display.value = displayText;
};

const operatorKeyClickHandler = (operator) => {
  displayText += operator;
  display.value = displayText;
  if (previousOperator === "") {
    result += Number(currentNum);
  } else {
    if (previousOperator === "+") {
      result += Number(currentNum);
    } else if (previousOperator === "-") {
      result -= Number(currentNum);
    } else if (previousOperator === "*") {
      result *= Number(currentNum);
    } else if (previousOperator === "/") {
      if (Number(currentNum) == 0 && result == 0) {
        result = "NaN";
      } else if (Number(currentNum) == 0) {
        result = "Infinity";
      } else {
        result /= Number(currentNum);
      }
    }
  }
  previousOperator = operator;
  currentNum = "";
};

const resultKeyClickHandler = () => {
  if (currentNum === "") {
    display.value = String(result);
  } else {
    operatorKeyClickHandler("=");
    display.value = String(result);
  }
  currentNum = "";
  previousOperator = "";
  displayText = String(result);
};

const resetKeyClickHandler = () => {
  display.value = "0";
  currentNum = "";
  result = 0;
  displayText = "";
  previousOperator = "";
};
