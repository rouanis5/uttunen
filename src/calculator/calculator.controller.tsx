import { CalcBody } from '#calculator/components'

// route: /calc
export class CalculatorController {
  // method: GET, route: /
  get() {
    return <CalcBody />
  }

  insert() {}
  calc() {}
}
