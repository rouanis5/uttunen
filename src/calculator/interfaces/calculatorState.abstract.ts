import CalculatorContext from '../calculator.context'

export abstract class CalculatorState {
  protected context!: CalculatorContext

  public setContext(context: CalculatorContext) {
    this.context = context
  }

  public abstract handle1(): void

  public abstract handle2(): void
}
