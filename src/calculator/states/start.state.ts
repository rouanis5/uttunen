import { StateEnum, DigitDTO, OperatorDTO } from '#calculator/dto'
import { CalculatorState } from '#calculator/interfaces'
import { TypingOneState, SavedState } from '#calculator/states'

export class StartState extends CalculatorState {
  public getStateName(): StateEnum {
    return 'START_STATE'
  }

  // do nothing
  public onClear(): void {}

  public onInsert(digit: DigitDTO): void {
    this.context.insertDigit(digit)
    this.context.transitionTo(new TypingOneState())
  }

  public onOperate(op: OperatorDTO): void {
    this.context.changeOperator(op)
    this.context.transitionTo(new SavedState())
  }

  // do nothing
  public onEvaluate(): void {}
}
