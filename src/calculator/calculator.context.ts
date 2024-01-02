import calculatorService from './calculator.service'
import { CalculatorDTO, Operator } from './dto/calculator.dto'
import { CalculatorState } from './interfaces/calculatorState.abstract'

export default class CalculatorContext {
  private state!: CalculatorState

  private current!: number
  private op?: Operator
  private previous!: number

  constructor(
    private calculatorService: calculatorService,
    state: CalculatorState,
    data?: CalculatorDTO
  ) {
    if (!data) {
      this.reset()
    } else {
      this.setData(data)
    }
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
    this.state.onInsert()
  }

  public selectOperation(): void {
    this.state.onOperate()
  }

  public printResult(): void {
    this.state.onDisplay()
  }

  public reset(): void {
    this.current = 0
    this.op = undefined
    this.previous = 0
  }

  public setData(data: CalculatorDTO): void {
    this.current = data.current
    this.previous = data.previous
    this.op = data.op
  }

  public export() {
    return {
      current: this.current,
      op: this.op,
      previous: this.previous,
      state: this.state.getStateName(),
    }
  }
}
