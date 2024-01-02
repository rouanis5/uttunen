import { TypeOf, z } from 'zod'

const operatorSchema = z.enum(['+', '-', '*', '/'])

export const calculatorDTOSchema = z.object({
  current: z.coerce.number(),
  previous: z.coerce.number(),
  op: operatorSchema.optional(),
})

export type CalculatorDTO = z.infer<typeof calculatorDTOSchema>
export type Operator = z.infer<typeof operatorSchema>
