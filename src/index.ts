import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

const app = new Elysia({}).use(html()).listen(process.env.PORT || 8080)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
