import { CalcBody } from '#calculator/components'
import { Get } from '#core/httpMethods'
import { Controller, ControllerRoutes } from '#core/types'

// route: /calc
export class CalculatorController implements Controller {
  getRoutes(): ControllerRoutes {
    return {
      path: '/calc',
      subroutes: [Get('/', this.get)],
    }
  }
  // method: GET, route: /
  get() {
    return <CalcBody />
  }

  insert() {}
  calc() {}
}
