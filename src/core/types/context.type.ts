import { HttpResponse } from '#core'
import { HttpRequest } from '#core/types'

export type Context = {
  request: HttpRequest
  response: HttpResponse
}
