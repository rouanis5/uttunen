import Elysia from 'elysia'
import CalculatorController from './calculator.controller'
import makeElysiaCallback from '../core/wrappers/elysia.wrapper'

const calcController = new CalculatorController()

const route = (path: string = ''): string => `calc/${path}`
const calculatorRoutes = new Elysia().get(
  route(),
  makeElysiaCallback(calcController.get)
)
export default calculatorRoutes
