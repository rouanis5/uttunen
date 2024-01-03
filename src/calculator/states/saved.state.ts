import { DigitDTO } from '../dto/digit.dto'
import { OperatorDTO } from '../dto/operator.dto'
import { StateEnum } from '../dto/state.dto'
import { CalculatorState } from '../interfaces/calculatorState.abstract'
import CalculatedState from './calculated.state'
import TypingTwoState from './typingTwo.state'

export default class SavedState extends CalculatorState {
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
    this.context.setOperands({ current: this.context.getOperands().previous })
    this.context.calculate()
    this.context.transitionTo(new CalculatedState())
  }
}
