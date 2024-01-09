import { HttpHandler } from '#core/handlers'
import { ApiMethods, ControllerCallback, HttpRequest } from '#core/types'
import { html } from '@elysiajs/html'
import Elysia, { Context as ElysiaContext } from 'elysia'
import { HttpResponse } from '#core'
import { CustomError } from '#core/errors'

export class ElysiaHandler implements HttpHandler {
  private elysia: Elysia

  constructor() {
    this.elysia = new Elysia().use(html())
  }

  handleCallback(callback: ControllerCallback) {
    return (context: ElysiaContext) => {
      const request: HttpRequest = {
        body: context.body,
        query: context.query,
        params: context.params,
        method: context.request.method,
        path: context.path,
        Headers: context.headers,
      }

      let response = new HttpResponse()

      try {
        const result = callback({
          request,
          response,
        })
        response.execute()
        return result
      } catch (error) {
        if (!(error instanceof Error)) {
          context.set.status = 500
          return { error: 'something went wrong' }
        }

        if (error instanceof CustomError) {
          context.set.status = error.status
        } else {
          context.set.status = 500
        }

        return { error: error.message }
      }
    }
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
    callback: ControllerCallback
  ): void {
    const cb = this.handleCallback(callback)

    switch (method) {
      case 'GET':
        this.elysia.get(path, cb)
        break
      case 'POST':
        this.elysia.post(path, cb)
        break
      case 'DELETE':
        this.elysia.delete(path, cb)
        break
      case 'PUT':
        this.elysia.put(path, cb)
        break
    }
  }
}
