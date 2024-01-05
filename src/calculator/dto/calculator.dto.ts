import { z } from 'zod'
import { operatorDTOSchema } from '#calculator/dto'

export const operandsDTOSchema = z.object({
  current: z.coerce.string().regex(/^(0|[1-9]\d*)(\.\d+)?$/),
  previous: z.coerce.number(),
})

export const calculatorDTOSchema = operandsDTOSchema.extend({
  op: operatorDTOSchema.optional(),
})

export type CalculatorDTO = z.infer<typeof calculatorDTOSchema>
export type OperandsDTO = z.infer<typeof operandsDTOSchema>
