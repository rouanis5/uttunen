import CalculatorContext from '../calculator.context'

export abstract class CalculatorState {
  protected context!: CalculatorContext

  public setContext(context: CalculatorContext) {
    this.context = context
  }

  public abstract onClear(): void

  public abstract onType(): void

  public abstract onOperate(): void

  public abstract onDisplay(): void
}
