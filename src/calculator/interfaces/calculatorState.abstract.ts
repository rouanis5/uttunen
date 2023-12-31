import CalculatorContext from '../calculator.context'

export abstract class CalculatorState {
  protected context!: CalculatorContext

  public setContext(context: CalculatorContext) {
    this.context = context
  }

  public abstract clearScreen(): void

  public abstract addDigit(): void

  public abstract selectOperation(): void

  public abstract printResult(): void
}
