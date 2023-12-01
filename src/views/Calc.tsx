import { formatOperand } from '..'

interface CalcState {
  current?: string
  previous?: string
  operator?: string
}

export const Calc = ({
  current = '',
  previous = '',
  operator = '',
}: CalcState) => {
  console.log({ previous, operator, current })
  return (
    <form hx-target="#CalcScreen" hx-swap="outerHTML">
      <CalcScreen current={current} previous={previous} operator={operator} />
      <button hx-delete="/">C</button>
      <div>
        <NumberBtn digit={7} />
        <NumberBtn digit={8} />
        <NumberBtn digit={9} />
        <OperatorBtn operator="/" />
      </div>
      <div>
        <NumberBtn digit={4} />
        <NumberBtn digit={5} />
        <NumberBtn digit={6} />
        <OperatorBtn operator="*" />
      </div>
      <div>
        <NumberBtn digit={1} />
        <NumberBtn digit={2} />
        <NumberBtn digit={3} />
        <OperatorBtn operator="-" />
      </div>
      <div>
        <NumberBtn digit={0} />
        <NumberBtn digit="." />
        <OperatorBtn operator="=" />
        <OperatorBtn operator="+" />
      </div>
    </form>
  )
}

export const NumberBtn = ({ digit }: { digit: number | '.' }) => {
  return (
    <button hx-put="/insert" name="next" value={digit.toString()}>
      {digit}
    </button>
  )
}

export const OperatorBtn = (params: {
  operator: '+' | '-' | '*' | '/' | '='
}) => {
  return (
    <button hx-put="/calc" name="operation" value={params.operator}>
      {params.operator}
    </button>
  )
}

export const CalcScreen = ({
  current = '',
  previous = '',
  operator = '',
}: CalcState) => {
  return (
    <div id="CalcScreen">
      <p>{!current ? '0' : formatOperand(current)}</p>
      <input type="hidden" name="previous" value={previous} />
      <input type="hidden" name="operator" value={operator} />
      <input type="hidden" name="current" value={current} />
    </div>
  )
}
