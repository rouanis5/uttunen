import { StateEnum } from '../dto/state.dto'
import { CalculatorState } from '../interfaces/calculatorState.abstract'

export default class ErrorState extends CalculatorState {
  public getStateName(): StateEnum {
    return 'ERROR_STATE'
  }
  public onClear(): void {
    this.context.reset()
  }

  // do nothing
  public onInsert(): void {}
  public onOperate(): void {}
  public onEvaluate(): void {}
}
