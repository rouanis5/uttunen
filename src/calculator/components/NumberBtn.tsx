export const NumberBtn = ({ digit = '' }) => {
  return (
    <button hx-put="/insert" name="next" value={digit}>
      {digit}
    </button>
  )
}
