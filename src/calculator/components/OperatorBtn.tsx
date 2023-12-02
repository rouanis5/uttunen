const OperatorBtn = (params: { operator: '+' | '-' | '*' | '/' | '=' }) => {
  return (
    <button hx-put="/calc" name="operation" value={params.operator}>
      {params.operator}
    </button>
  )
}

export default OperatorBtn
