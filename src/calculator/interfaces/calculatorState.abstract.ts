import { CalculatorContext } from '#calculator/calculator.context'
import { DigitDTO, OperatorDTO, StateEnum } from '#calculator/dto'

export abstract class CalculatorState {
  protected context!: CalculatorContext

  public setContext(context: CalculatorContext) {
    this.context = context
  }

  public abstract getStateName(): StateEnum

  public abstract onClear(): void

  public abstract onInsert(digit: DigitDTO): void

  public abstract onOperate(operator: OperatorDTO): void

  public abstract onEvaluate(): void
}
