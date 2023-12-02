const NumberBtn = ({ digit }: { digit: number | '.' }) => {
  return (
    <button hx-put="/insert" name="next" value={digit.toString()}>
      {digit}
    </button>
  )
}

export default NumberBtn
