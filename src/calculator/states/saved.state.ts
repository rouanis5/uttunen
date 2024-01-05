import { DigitDTO, OperatorDTO, StateEnum } from '#calculator/dto'
import { CalculatorState } from '#calculator/interfaces'
import { TypingTwoState, CalculatedState } from '#calculator/states'

export class SavedState extends CalculatorState {
  public getStateName(): StateEnum {
    return 'SAVED_STATE'
  }
  public onClear(): void {
    this.context.reset()
  }

  public onInsert(digit: DigitDTO): void {
    this.context.insertDigit(digit)
    this.context.transitionTo(new TypingTwoState())
  }

  public onOperate(operator: OperatorDTO): void {
    this.context.changeOperator(operator)
  }

  public onEvaluate(): void {
    this.context.setOperands({
      current: this.context.getOperands().previous.toString(),
    })
    this.context.calculate()
    this.context.transitionTo(new CalculatedState())
  }
}
