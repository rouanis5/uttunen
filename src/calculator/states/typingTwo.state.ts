import { DigitDTO } from '../dto/digit.dto'
import { OperatorDTO } from '../dto/operator.dto'
import { StateEnum } from '../dto/state.dto'
import { CalculatorState } from '../interfaces/calculatorState.abstract'
import CalculatedState from './calculated.state'
import SavedState from './saved.state'

export default class TypingTwoState extends CalculatorState {
  public getStateName(): StateEnum {
    return 'TYPING_TWO_STATE'
  }

  public onClear(): void {
    this.context.reset()
  }

  public onInsert(digit: DigitDTO): void {
    this.context.insertDigit(digit)
  }

  public onOperate(operator: OperatorDTO): void {
    this.context.calculate()
    this.context.changeOperator(operator)
    this.context.transitionTo(new SavedState())
  }

  public onEvaluate(): void {
    this.context.calculate()
    this.context.transitionTo(new CalculatedState())
  }
}
