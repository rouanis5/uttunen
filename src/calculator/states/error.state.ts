import { StateEnum } from '#calculator/dto'
import { CalculatorState } from '#calculator/interfaces'

export class ErrorState extends CalculatorState {
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
