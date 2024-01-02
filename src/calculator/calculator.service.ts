import { CalculatorDTO } from './dto/calculator.dto'

export default class calculatorService {
  INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
  })

  formatOperand(number: number) {
    const operand = number

    const [interger, decimal] = operand.toString().split('.')

    if (decimal == null) {
      return this.INTEGER_FORMATTER.format(parseInt(interger))
    }

    return `${this.INTEGER_FORMATTER.format(parseInt(interger))}.${decimal}`
  }

  evaluate({ previous, current, op }: CalculatorDTO): number {
    switch (op) {
      case '+':
        return previous + current
      case '-':
        return previous - current
      case '*':
        return previous * current
      case '/':
        return previous / current
      default:
        return NaN
    }
  }
}
