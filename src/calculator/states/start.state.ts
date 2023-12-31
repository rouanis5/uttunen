import { CalculatorState } from '../interfaces/calculatorState.abstract'

export default class StartState extends CalculatorState {
  public handle1(): void {
    throw new Error('Method not implemented.')
  }
  public handle2(): void {
    throw new Error('Method not implemented.')
  }
}
