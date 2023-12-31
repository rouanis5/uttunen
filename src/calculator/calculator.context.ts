import { calculatorService } from '#calculator'
import {
  CalculatorDTO,
  OperandsDTO,
  OperatorDTO,
  DigitDTO,
  StateDTO,
} from '#calculator/dto'
import { CalculatorState } from '#calculator/interfaces'
import { StartState, ErrorState } from '#calculator/states'

export class CalculatorContext {
  private state!: CalculatorState

  private current!: string
  private op?: OperatorDTO
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

  public onClear(): void {
    this.state.onClear()
  }

  public onInsert(digit: DigitDTO): void {
    this.state.onInsert(digit)
  }

  public onOperate(operator: OperatorDTO): void {
    this.state.onOperate(operator)
  }

  public onEvaluate(): void {
    this.state.onEvaluate()
  }

  public reset(noTransition = false): void {
    if (!noTransition) {
      this.transitionTo(new StartState())
    }
    this.current = '0'
    this.op = undefined
    this.previous = 0
  }

  public insertDigit(digit: DigitDTO): void {
    if (this.current === '0' && digit === '0') return
    this.current += digit
  }

  public changeOperator(op: OperatorDTO): void {
    this.op = op
  }

  public calculate(): void {
    // just make calculation and put it in previous
    try {
      const result = this.calculatorService.evaluate({
        op: this.op,
        current: parseFloat(this.current),
        previous: this.previous,
      })

      this.reset(true)
      this.previous = result
    } catch (error) {
      this.transitionTo(new ErrorState())
    }
  }

  private setData(data: CalculatorDTO): void {
    this.current = data.current
    this.previous = data.previous
    this.op = data.op
  }

  public setOperands(operands: Partial<OperandsDTO>): void {
    if (!!operands.current) {
      this.current = operands.current
    }

    if (!!operands.previous) {
      this.previous = operands.previous
    }
  }

  public getOperands(): OperandsDTO {
    return {
      current: this.current,
      previous: this.previous,
    }
  }

  public export(): StateDTO {
    return {
      current: this.current,
      op: this.op,
      previous: this.previous,
      state: this.state.getStateName(),
    }
  }
}
