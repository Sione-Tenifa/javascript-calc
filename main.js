class Calculator {
  constructor(previousOperanandTextElement, currentOperanandTextElement){

    this.previousOperanandTextElement = previousOperanandTextElement
    this.currentOperanandTextElement = currentOperanandTextElement
    this.clear()
  }
  clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined

  }

  delete(){

  }

  appendNumber(number){
    this.currentOperand = number
  }

  chooseOperation(operation){

  }
  
  compute() {

  }

  updateDisplay(){
    this.currentOperanandTextElement.innerText = this.currentOperand
  }


}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperanandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperanandTextElement = document.querySelectorAll('[data-current-operand]')

const calculator = new Calculator(previousOperanandTextElement, currentOperanandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
