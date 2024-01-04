const CalcScreen = ({ current = '', previous = '', operator = '' }) => {
  return (
    <div id="CalcScreen">
      <p>
        {previous} {operator}
      </p>
      <p>{current}</p>
    </div>
  )
}

export default CalcScreen
