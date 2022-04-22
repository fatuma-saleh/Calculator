class Calculator {
  constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = " ";
    this.previousOperand = " ";
    this.operation = undefined;
  }
  delete() {}
  appendNumber(number) {
    if(number === "." && this.currentOperand.includes(".")) return
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {}
  compute() {}
  updateDisplay() {
    this.currentTextElement.innerText = this.currentOperand;
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

OperationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
