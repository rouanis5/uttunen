import CalcScreen from './CalcScreen'
import NumberBtn from './NumberBtn'
import OperatorBtn from './OperatorBtn'

const CalcBody = ({ current = '', previous = '', operator = '' }) => {
  return (
    <form hx-target="#CalcScreen" hx-swap="outerHTML">
      <CalcScreen current={current} previous={previous} operator={operator} />
      <button hx-delete="/">CE</button>
      <div>
        <NumberBtn digit="7" />
        <NumberBtn digit="8" />
        <NumberBtn digit="9" />
        <OperatorBtn operator="/" />
      </div>
      <div>
        <NumberBtn digit="4" />
        <NumberBtn digit="5" />
        <NumberBtn digit="6" />
        <OperatorBtn operator="*" />
      </div>
      <div>
        <NumberBtn digit="1" />
        <NumberBtn digit="2" />
        <NumberBtn digit="3" />
        <OperatorBtn operator="-" />
      </div>
      <div>
        <NumberBtn digit="0" />
        <NumberBtn digit="." />
        <OperatorBtn operator="=" />
        <OperatorBtn operator="+" />
      </div>
    </form>
  )
}

export default CalcBody
