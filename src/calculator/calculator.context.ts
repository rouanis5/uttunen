import { CalculatorState } from './interfaces/calculatorState.abstract'

export default class CalculatorContext {
  private state!: CalculatorState

  private current: number = 0
  private op?: string
  private previous?: number

  constructor(state: CalculatorState) {
    this.transitionTo(state)
  }

  public transitionTo(state: CalculatorState): void {
    this.state = state
    this.state.setContext(this)
  }

  public clearScreen(): void {
    this.state.onClear()
  }

  public addDigit(): void {
    this.state.onType()
  }

  public selectOperation(): void {
    this.state.onOperate()
  }

  public printResult(): void {
    this.state.onDisplay()
  }
}
