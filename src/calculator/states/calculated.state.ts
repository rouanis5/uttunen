import { DigitDTO } from '../dto/digit.dto'
import { OperatorDTO } from '../dto/operator.dto'
import { StateEnum } from '../dto/state.dto'
import { CalculatorState } from '../interfaces/calculatorState.abstract'
import SavedState from './saved.state'
import TypingOneState from './typingOne.state'

export default class CalculatedState extends CalculatorState {
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
