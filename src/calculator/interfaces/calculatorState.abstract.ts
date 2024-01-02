import CalculatorContext from '../calculator.context'

export abstract class CalculatorState {
  protected context!: CalculatorContext

  public setContext(context: CalculatorContext) {
    this.context = context
  }

  public abstract getStateName(): string

  public abstract onClear(): void

  public abstract onInsert(): void

  public abstract onOperate(): void

  public abstract onDisplay(): void
}
