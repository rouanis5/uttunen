export default class calculatorService {
  INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
  })

  formatOperand(number: string) {
    const operand = number

    const [interger, decimal] = operand.split('.')

    if (decimal == null) {
      return this.INTEGER_FORMATTER.format(parseInt(interger))
    }

    return `${this.INTEGER_FORMATTER.format(parseInt(interger))}.${decimal}`
  }

  evaluate({
    prevOperand,
    currOperand,
    operation,
  }: {
    prevOperand: number
    currOperand: number
    operation: string
  }): number {
    switch (operation) {
      case '+':
        return prevOperand + currOperand
      case '-':
        return prevOperand - currOperand
      case '*':
        return prevOperand * currOperand
      case '/':
        return prevOperand / currOperand
      default:
        return NaN
    }
  }
}
