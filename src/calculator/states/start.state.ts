import { DigitDTO } from '../dto/digit.dto'
import { OperatorDTO } from '../dto/operator.dto'
import { StateEnum } from '../dto/state.dto'
import { CalculatorState } from '../interfaces/calculatorState.abstract'
import SavedState from './saved.state'
import TypingOneState from './typingOne.state'

export default class StartState extends CalculatorState {
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
