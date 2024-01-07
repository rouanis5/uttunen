import { Home } from '#home/components'

// route: /
export class HomeController {
  constructor() {}

  // method: get, route: /
  get() {
    return <Home />
  }
}
