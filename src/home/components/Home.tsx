import CalcBody from '../../calculator/components/CalcBody'

export const Home = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Uttunen</title>
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </head>
      <body>
        <CalcBody />
      </body>
      <script
        src="https://unpkg.com/htmx.org@1.9.9"
        integrity="sha384-QFjmbokDn2DjBjq+fM+8LUIVrAgqcNW2s0PjAxHETgRn9l4fvX31ZxDxvwQnyMOX"
        crossorigin="anonymous"
      ></script>
    </html>
  )
}

export default Home