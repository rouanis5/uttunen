import { Get } from '#core/httpMethods'
import { Controller, ControllerRoutes } from '#core/types'
import { Home } from '#home/components'

// route: /
export class HomeController implements Controller {
  getRoutes(): ControllerRoutes {
    return {
      path: '/',
      subroutes: [Get('/', this.get)],
    }
  }

  // method: get, route: /
  get() {
    return <Home />
  }
}
