import { DigitDTO, OperatorDTO, StateEnum } from '#calculator/dto'
import { CalculatorState } from '#calculator/interfaces'
import { SavedState, TypingOneState } from '#calculator/states'

export class CalculatedState extends CalculatorState {
  public getStateName(): StateEnum {
    return 'CALCULATED_STATE'
  }

  public onClear(): void {
    this.context.reset()
  }

  public onInsert(digit: DigitDTO): void {
    this.context.reset()
    this.context.insertDigit(digit)
    this.context.transitionTo(new TypingOneState())
  }

  public onOperate(operator: OperatorDTO): void {
    this.context.changeOperator(operator)
    this.context.transitionTo(new SavedState())
  }

  public onEvaluate(): void {
    this.context.calculate()
  }
}
