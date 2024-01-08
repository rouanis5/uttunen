import { ApiMethods } from '#core/types'

export abstract class HttpHandler {
  abstract serve(port: number): void
  abstract getUrl(): string
  abstract close(): void
  abstract addRoute(
    method: ApiMethods,
    path: string,
    callback: (...args: any[]) => any
  ): void
}
