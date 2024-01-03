import { DigitDTO } from '../dto/digit.dto'
import { OperatorDTO } from '../dto/operator.dto'
import { StateEnum } from '../dto/state.dto'
import { CalculatorState } from '../interfaces/calculatorState.abstract'
import SavedState from './saved.state'

export default class TypingOneState extends CalculatorState {
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
    this.context.setOperands({ previous: operands.current, current: 0 })
    this.context.changeOperator(op)
    this.context.transitionTo(new SavedState())
  }

  // do nothing
  public onEvaluate(): void {}
}
