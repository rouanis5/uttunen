import { CalculatorState } from '../interfaces/calculatorState.abstract'

export default class StartState extends CalculatorState {
  public clearScreen(): void {
    throw new Error('Method not implemented.')
  }
  public addDigit(): void {
    throw new Error('Method not implemented.')
  }
  public selectOperation(): void {
    throw new Error('Method not implemented.')
  }
  public printResult(): void {
    throw new Error('Method not implemented.')
  }
}
