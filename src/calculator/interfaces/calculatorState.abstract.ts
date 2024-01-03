import CalculatorContext from '../calculator.context'
import { OperatorDTO } from '../dto/operator.dto'
import { StateEnum } from '../dto/state.dto'

export abstract class CalculatorState {
  protected context!: CalculatorContext

  public setContext(context: CalculatorContext) {
    this.context = context
  }

  public abstract getStateName(): StateEnum

  public abstract onClear(): void

  public abstract onInsert(digit: string): void

  public abstract onOperate(operator: OperatorDTO): void

  public abstract onEvaluate(): void
}
