import Elysia from 'elysia'
import HomeController from './home.controller'
import makeElysiaCallback from '../core/wrappers/elysia.wrapper'

const homeController = new HomeController()

const homeRoutes = new Elysia().get('/', makeElysiaCallback(homeController.get))

export default homeRoutes
