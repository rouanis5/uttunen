const OperatorBtn = ({ operator = '' }) => {
  return (
    <button hx-put="/calc" name="operation" value={operator}>
      {operator}
    </button>
  )
}

export default OperatorBtn
