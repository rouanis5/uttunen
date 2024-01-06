import { Context } from 'elysia'
import { HttpRequest } from '#core/types'
import { CustomError } from '#core/errors'
import { HttpResponse } from '#core/httpResponse'

export type RequestCallbackWrapper = (
  controller: (request: HttpRequest) => any
) => any

export const makeElysiaCallback =
  (controller: (request: HttpRequest, response: HttpResponse) => any) =>
  (context: Context) => {
    const httpRequest: HttpRequest = {
      body: context.body,
      query: context.query,
      params: context.params,
      method: context.request.method,
      path: context.path,
      Headers: context.headers,
    }

    let response = new HttpResponse()

    try {
      const result = controller(httpRequest, response)
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
