class Calculator {
  constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0,-1)
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.currentOperand != "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default :
      return 
    }
    this.currentOperand = result
    this.operation = undefined
    this.previousOperand = ""
  }

displayNumberFormat(number){
  const stringNumber = number.toString()
  const intDigit = parseFloat(stringNumber.split('.')[0])
  const decDigit = stringNumber.split('.')[1]
  let integerDisplay
  if(isNaN(intDigit)){
    integerDisplay = ""
  }else{
    integerDisplay = intDigit.toLocaleString('en',{
      maximumFractionDigits: 0})
    
  }
  if(decDigit != null){
    return`${integerDisplay}.${decDigit}`
  }else{
    return integerDisplay
  }
//   const floatNumber = parseFloat(number)
//   if(isNaN(floatNumber)) return ""
//   return floatNumber.toLocaleString("en")
 }
  updateDisplay() {
    this.currentTextElement.innerText = this.displayNumberFormat(this.currentOperand);
    if(this.operation != null){
    this.previousTextElement.innerText = `${this.displayNumberFormat(this.previousOperand)} ${this.operation}`;
    }else{
      this.previousTextElement.innerText = ""
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelector("[data-equals]");
const deleteButtons = document.querySelector("[data-delete]");
const previousTextElement = document.querySelector("[data-previous-operand]");
const currentTextElement = document.querySelector("[data-current-operand]");
const allClearButtons = document.querySelector("[data-all-clear]");

const calculator = new Calculator(previousTextElement, currentTextElement);
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButtons.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButtons.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});
deleteButtons.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});