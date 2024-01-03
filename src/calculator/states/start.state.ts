import { StateEnum } from '../dto/state.dto'
import { CalculatorState } from '../interfaces/calculatorState.abstract'

export default class StartState extends CalculatorState {
  public getStateName(): StateEnum {
    return 'START_STATE'
  }

  public onClear(): void {
    throw new Error('Method not implemented.')
  }

  public onInsert(): void {
    throw new Error('Method not implemented.')
  }

  public onOperate(): void {
    throw new Error('Method not implemented.')
  }

  public onDisplay(): void {
    throw new Error('Method not implemented.')
  }
}
