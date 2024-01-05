import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { homeRoutes } from '#home'
import { calculatorRoutes } from '#calculator'

const app = new Elysia({})
  .use(html())
  .use(homeRoutes)
  .use(calculatorRoutes)
  .listen(process.env.PORT || 8080)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
