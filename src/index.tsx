import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import Main from './views/Main'

const app = new Elysia()
  .use(html())
  .get('/', () => <Main />)
  .listen(process.env.PORT || 8080)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
