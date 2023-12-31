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

  public request1(): void {
    this.state.handle1()
  }

  public request2(): void {
    this.state.handle2()
  }
}
