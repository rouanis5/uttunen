import { HttpHandler } from '#core/handlers'
import { ApiMethods } from '#core/types'
import { html } from '@elysiajs/html'
import Elysia from 'elysia'

export class ElysiaHandler implements HttpHandler {
  private elysia: Elysia

  constructor() {
    this.elysia = new Elysia().use(html())
  }

  serve(port: number): void {
    this.elysia.listen(port)
  }

  getUrl(): string {
    return `${this.elysia.server?.hostname}:${this.elysia.server?.port}`
  }

  close(): void {
    this.elysia.stop()
  }

  addRoute(
    method: ApiMethods,
    path: string,
    callback: (...args: any) => any
  ): void {
    switch (method) {
      case 'GET':
        this.elysia.get(path, callback)
        break
      case 'POST':
        this.elysia.post(path, callback)
        break
      case 'DELETE':
        this.elysia.delete(path, callback)
        break
      case 'PUT':
        break
    }
  }
}
