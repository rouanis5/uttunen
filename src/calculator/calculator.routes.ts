import Elysia from 'elysia'
import CalculatorController from '#calculator/calculator.controller'
import { makeElysiaCallback } from '#core/wrappers'

const calcController = new CalculatorController()

const route = (path: string = ''): string => `calc/${path}`
const calculatorRoutes = new Elysia().get(
  route(),
  makeElysiaCallback(calcController.get)
)
export default calculatorRoutes
