import Elysia from 'elysia'
import CalculatorController from './calculator.controller'

const calcController = new CalculatorController()

const route = (path: string = ''): string => `calc/${path}`
const calculatorRoutes = new Elysia().get(route(), () => calcController.get())

export default calculatorRoutes
