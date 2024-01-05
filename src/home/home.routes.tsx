import Elysia from 'elysia'
import { HomeController } from '#home'
import { makeElysiaCallback } from '#core/wrappers'

const homeController = new HomeController()

export const homeRoutes = new Elysia().get(
  '/',
  makeElysiaCallback(homeController.get)
)
