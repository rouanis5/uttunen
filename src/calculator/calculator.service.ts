import { OperatorDTO } from '#calculator/dto'

export class calculatorService {
  private INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
  })

  formatOperand(number: string): string {
    const operand = number

    const [interger, decimal] = operand.split('.')

    if (decimal == null) {
      return this.INTEGER_FORMATTER.format(parseInt(interger))
    }

    return `${this.INTEGER_FORMATTER.format(parseInt(interger))}.${decimal}`
  }

  evaluate({
    previous,
    current,
    op,
  }: {
    previous: number
    current: number
    op?: OperatorDTO
  }): number {
    switch (op) {
      case '+':
        return previous + current
      case '-':
        return previous - current
      case '*':
        return previous * current
      case '/':
        if (current === 0) {
          throw new Error('division by zero')
        }
        return previous / current
      default:
        throw new Error('No operator found!')
    }
  }
}
