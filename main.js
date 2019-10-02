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
    if ( number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation){
    if (this.currentOperand === '') return
    if (this.previousOperand !== ''){
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }
      
  
  compute() {
    let computation 
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '/':
          computation = prev / current
          break
        case '*':
          computation = prev * current
          break
        default: 
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
  }

  updateDisplay(){
    this.currentOperanandTextElement.innerText = this.currentOperand
    this.previousOperanandTextElement.innerText = this.previousOperand

    // console.log(currentOperanandTextElement)
  }


}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperanandTextElement = document.querySelector('[data-previous-operand]')
const currentOperanandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperanandTextElement, currentOperanandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()  
    // console.log(updateDisplay)
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()  
    // console.log(updateDisplay)
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})
