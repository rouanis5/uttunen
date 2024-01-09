import { ApiMethods, ControllerCallback } from '#core/types'
import { HttpResponse } from '#core'

export abstract class HttpHandler {
  abstract serve(port: number): void
  abstract getUrl(): string
  abstract close(): void
  abstract addRoute(
    method: ApiMethods,
    path: string,
    callback: ControllerCallback
  ): void
  abstract handleCallback(callback: ControllerCallback): any
  // abstract handleResponse(response: HttpResponse): void
}
