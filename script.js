class Calculator{
  constructor(previousTextElement,currentTextElement){
    this.previousTextElement = previousTextElement
    this.currentTextElement = currentTextElement
  
}
}

const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButtons = document.querySelector("[data-equals]")
const deleteButtons = document.querySelector("[data-delete]")
const previousTextElement = document.querySelector("[data-previous-operand]")
const currentTextElement = document.querySelector("[data-current-operand]")
const allClearButtons = document.querySelector("[data-all-clear]")