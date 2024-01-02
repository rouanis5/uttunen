import { CalculatorState } from '../interfaces/calculatorState.abstract'

export default class StartState extends CalculatorState {
  public onClear(): void {
    throw new Error('Method not implemented.')
  }
  public onType(): void {
    throw new Error('Method not implemented.')
  }
  public onOperate(): void {
    throw new Error('Method not implemented.')
  }
  public onDisplay(): void {
    throw new Error('Method not implemented.')
  }
}
