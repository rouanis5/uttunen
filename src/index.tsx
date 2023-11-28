import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import Main from './views/Main'

const app = new Elysia()
  .use(html())
  .get('/', () => <Main />)
  .put('/calc', ({ body }) => {
    return Number.parseInt(body.num0) + Number.parseInt(body.num1)
  })
  .listen(process.env.PORT || 8080)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
