import { ApiMethods, ControllerCallback, Subroute } from '#core/types'

function createSubRoute(
  method: ApiMethods,
  path: string,
  callback: ControllerCallback
): Subroute {
  return {
    method,
    path,
    callback,
  }
}

export const Get = (path: string, callback: ControllerCallback) =>
  createSubRoute('GET', path, callback)
export const Post = (path: string, callback: ControllerCallback) =>
  createSubRoute('POST', path, callback)
export const Put = (path: string, callback: ControllerCallback) =>
  createSubRoute('PUT', path, callback)
export const Delete = (path: string, callback: ControllerCallback) =>
  createSubRoute('DELETE', path, callback)
