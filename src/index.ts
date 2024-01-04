import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import homeRoutes from './home/home.routes'

const app = new Elysia({})
  .use(html())
  .use(homeRoutes)
  .listen(process.env.PORT || 8080)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
