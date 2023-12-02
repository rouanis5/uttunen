import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import HomeController from './home/home.controller'

const homeController = new HomeController()

const app = new Elysia()
  .use(html())
  .get('/', () => homeController.get())
  .put('/insert', (req) => {
    // const { current, previous, next } = req.body
    // const currentOperand = `${current}${next}`
    // return <CalcScreen previous={previous} current={currentOperand} />
  })
  .put('/calc', async (req) => {
    /**
     *
     *
     *
     * can I just use  the state pattern?
     * (i mean what are all possible states of the calculator?)
     * what are the common operation/functions ?
     * how each functions work in different state?
     *
     * how can i apply a clean MVC pattern?
     *
     * what about HTMX error handle (graphics)
     *
     *
     */
    // const body = await z
    //   .object({
    //     current: z.coerce.number().optional(),
    //     previous: z.coerce.number().optional(),
    //     operator: z.enum(['+', '-', '*', '/', '']).optional(),
    //     operation: z.enum(['+', '-', '*', '/']),
    //   })
    //   .parseAsync(req.body)
    // if (!body.current && !body.previous) {
    //   return <Calc />
    // }
    // if (!body.current) {
    //   return (
    //     <Calc operator={body.operation} previous={body.previous?.toString()} />
    //   )
    // }
    // if (!body.previous) {
    //   return (
    //     <Calc operator={body.operation} previous={body.current.toString()} />
    //   )
    // }
    // const result = 0
    // return <Calc operator={body.operation} previous={result.toString()} />
  })
  .delete('/', () => {
    // return <CalcScreen />
  })
  .listen(process.env.PORT || 8080)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
