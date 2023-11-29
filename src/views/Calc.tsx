export const Calc = ({ current }: { current?: string }) => {
  return (
    <div hx-target="this" hx-swap="outerHTML">
      <p id="screen">{current ?? '0'}</p>
      <button hx-delete="/">C</button>
      <div>
        <NumberBtn previous={current} next={7} />
        <NumberBtn previous={current} next={8} />
        <NumberBtn previous={current} next={9} />
        <button>/</button>
      </div>
      <div>
        <NumberBtn previous={current} next={4} />
        <NumberBtn previous={current} next={5} />
        <NumberBtn previous={current} next={6} />
        <button>*</button>
      </div>
      <div>
        <NumberBtn previous={current} next={1} />
        <NumberBtn previous={current} next={2} />
        <NumberBtn previous={current} next={3} />
        <button>-</button>
      </div>
      <div>
        <NumberBtn previous={current} next={0} />
        <NumberBtn previous={current} next={'.'} />
        <button>=</button>
        <button>+</button>
      </div>
    </div>
  )
}

export const NumberBtn = ({
  previous,
  next,
}: {
  previous?: string
  next: number | '.'
}) => {
  return (
    <button
      hx-put={`/insert?${!previous ? '' : `prev=${previous}`}&next=${next}`}
    >
      {next}
    </button>
  )
}
