import Elysia from 'elysia'
import HomeController from './home.controller'

const homeController = new HomeController()

const homeRoutes = new Elysia().get('/', () => homeController.get())

export default homeRoutes
