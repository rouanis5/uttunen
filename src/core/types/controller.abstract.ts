import { ApiMethods, Context } from '#core/types'

export type ControllerCallback = (context?: Context) => any

export type Subroute = {
  method: ApiMethods
  path: string
  // middlwares: ControllerCallback[]
  callback: ControllerCallback
}

export type ControllerRoutes = { path: string; subroutes: Subroute[] }

export abstract class Controller {
  abstract getRoutes(): ControllerRoutes
}
