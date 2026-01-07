const screen1 = document.getElementById("calculator_screen--text1");
const screen2 = document.getElementById("calculator_screen--text2");
const m = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const mathItem = ["plus", "minus", "multiply", "divide"];
const deleteNums = document.getElementById("delete");
const calcButton = document.getElementById("result_button");
let currentNum = "";
let secondNumber = "";
let flag = 0;
let mathOperation = "";
for (let i = 0; i <= 9; i++) {
  document.getElementById(m[i]).addEventListener("click", () => {
    if (currentNum.length <= 25 && mathOperation === "") {
      currentNum = currentNum + String(i);
      screen1.textContent = currentNum;
    } else if (secondNumber.length <= 25) {
      secondNumber = secondNumber + String(i);
      screen2.textContent = secondNumber;
    }
  });
}
for (let i = 0; i <= 3; i++) {
  document.getElementById(mathItem[i]).addEventListener("click", () => {
    mathOperation = document.getElementById(mathItem[i]).textContent;
    document.getElementById("screen--math").textContent = mathOperation;
  });
}

let result;

calcButton.addEventListener("click", () => {
  switch (mathOperation) {
    case '+':
      result = Number(currentNum) + Number(secondNumber);
      break;
    case '-':
      result = Number(currentNum) - Number(secondNumber);
      break;
    case '/':
      result = (Number(currentNum) / Number(secondNumber)).toFixed(5);
      break;
    case '*':
      result = Number(currentNum) * Number(secondNumber);
      break;
    default:
      result = 'Something wrong!!!';
      break;
  }
  screen1.textContent = "";
  screen1.textContent = `result: ${result}`;
  screen2.textContent = "";
  mathOperation = "";
});

deleteNums.addEventListener('click', () => {
  screen1.textContent = "";
  screen2.textContent = "";
  mathOperation = "";
  currentNum = ''
  secondNumber = ''
  document.getElementById("screen--math").textContent = "";
});