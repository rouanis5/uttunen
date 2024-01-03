import { z } from 'zod'
import { operatorDTOSchema } from './operator.dto'

export const operandsDTOSchema = z.object({
  current: z.coerce.number(),
  previous: z.coerce.number(),
})

export const calculatorDTOSchema = operandsDTOSchema.extend({
  op: operatorDTOSchema.optional(),
})

export type CalculatorDTO = z.infer<typeof calculatorDTOSchema>
export type OperandsDTO = z.infer<typeof operandsDTOSchema>
