import { z } from 'zod'
import { operatorDTOSchema } from './operator.dto'

export const calculatorDTOSchema = z.object({
  current: z.coerce.number(),
  previous: z.coerce.number(),
  op: operatorDTOSchema.optional(),
})

export type CalculatorDTO = z.infer<typeof calculatorDTOSchema>
