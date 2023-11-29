import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import Main from './views/Main'
import { Calc } from './views/Calc'

const app = new Elysia()
  .use(html())
  .get('/', () => <Main />)
  .put('/insert', ({ query }) => {
    const { prev, next } = query
    return <Calc current={`${prev ?? ''}${next ?? ''}`} />
  })
  .delete('/', () => {
    return <Calc />
  })
  .listen(process.env.PORT || 8080)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
