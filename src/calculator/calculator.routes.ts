import Elysia from 'elysia'
import { CalculatorController } from '#calculator'
import { makeElysiaCallback } from '#core/wrappers'

const calcController = new CalculatorController()

const route = (path: string = ''): string => `calc/${path}`

export const calculatorRoutes = new Elysia().get(
  route(),
  makeElysiaCallback(calcController.get)
)
