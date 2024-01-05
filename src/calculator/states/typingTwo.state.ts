import { StateEnum, DigitDTO, OperatorDTO } from '#calculator/dto'
import { CalculatorState } from '#calculator/interfaces/calculatorState.abstract'
import { SavedState, CalculatedState } from '#calculator/states'

export class TypingTwoState extends CalculatorState {
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
