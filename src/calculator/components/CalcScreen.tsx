import CalcState from '../interfaces/CalcState.interface'

const CalcScreen = ({ current, previous, operator }: CalcState) => {
  return (
    <div id="CalcScreen">
      <p>{current ?? '0'}</p>
      <input type="hidden" name="previous" value={previous} />
      <input type="hidden" name="operator" value={operator} />
      <input type="hidden" name="current" value={current} />
    </div>
  )
}

export default CalcScreen
