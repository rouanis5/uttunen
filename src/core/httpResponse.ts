export class HttpResponse {
  public code: number = 200
  public cookie?: object

  constructor() {}

  status(code: number): HttpResponse {
    code = code
    return this
  }

  end(): void {}

  setCookie() {}

  // make some dependency injection for elysia?
  // a ResponseHandler then i'll pass throw the context
  execute() {}
}
