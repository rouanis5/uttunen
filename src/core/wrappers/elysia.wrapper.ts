import { Context } from 'elysia'
import { HttpRequest } from '#core/types'
import { CustomError } from '#core/errors'

export type RequestCallbackWrapper = (
  controller: (request: HttpRequest) => any
) => any

export const makeElysiaCallback: RequestCallbackWrapper =
  (controller: (request: HttpRequest) => any) => (context: Context) => {
    const httpRequest: HttpRequest = {
      body: context.body,
      query: context.query,
      params: context.params,
      method: context.request.method,
      path: context.path,
      Headers: context.headers,
    }

    try {
      return controller(httpRequest)
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
