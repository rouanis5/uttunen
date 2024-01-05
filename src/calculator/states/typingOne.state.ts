import { StateEnum, DigitDTO, OperatorDTO } from '#calculator/dto'
import { CalculatorState } from '#calculator/interfaces'
import { SavedState } from '#calculator/states'

export class TypingOneState extends CalculatorState {
  public getStateName(): StateEnum {
    return 'TYPING_ONE_STATE'
  }

  public onClear(): void {
    this.context.reset()
  }

  public onInsert(digit: DigitDTO): void {
    this.context.insertDigit(digit)
  }

  public onOperate(op: OperatorDTO): void {
    const operands = this.context.getOperands()
    this.context.setOperands({
      previous: parseFloat(operands.current),
      current: '0',
    })
    this.context.changeOperator(op)
    this.context.transitionTo(new SavedState())
  }

  // do nothing
  public onEvaluate(): void {}
}
