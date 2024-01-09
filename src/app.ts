import { HttpHandler } from '#core/handlers'
import { Controller } from '#core/types'

export class App {
  private controllers: Controller[] = []
  constructor(private httpHandler: HttpHandler) {}

  addControllers(...controllers: Controller[]): App {
    controllers.map((controller) => this.addController(controller))
    return this
  }

  private addController(controller: Controller) {
    // check if the controller is already in list
    const isExisted = this.controllers.find(
      (value) =>
        Object.getPrototypeOf(value) === Object.getPrototypeOf(controller)
    )

    if (isExisted) {
      throw new Error('controller already exists !')
    }

    this.controllers.push(controller)
  }

  private getFullPath(path: string, subpath: string): string {
    if (path[0] === '/') {
      path = path.slice(1)
    }

    if (subpath[0] === '/') {
      subpath = subpath.slice(1)
    }

    return `${path}/${subpath}`
  }

  execute(port: number): void {
    this.controllers
      .map((controller) => controller.getRoutes())
      .map((routes) =>
        routes.subroutes.map((subroute) => {
          this.httpHandler.addRoute(
            subroute.method,
            this.getFullPath(routes.path, subroute.path),
            subroute.callback
          )
        })
      )

    this.httpHandler.serve(port)
    console.log(`Server is running at ${this.httpHandler.getUrl()}`)
  }

  close(): void {
    this.httpHandler.close()
  }
}
