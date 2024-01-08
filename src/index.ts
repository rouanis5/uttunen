import { CalculatorController } from '#calculator'
import { App } from '#core'
import { ElysiaHandler } from '#core/handlers'
import { HomeController } from './home'

new App(new ElysiaHandler())
  .addControllers(new HomeController(), new CalculatorController())
  .execute(8080)
