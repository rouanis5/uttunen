import { z } from 'zod'
import { calculatorDTOSchema } from './calculator.dto'

export const stateEnum = ['START_STATE'] as const
const stateEnumSchema = z.enum(stateEnum)

export const stateDTOSchema = calculatorDTOSchema.extend({
  state: stateEnumSchema,
})

export type StateDTO = z.infer<typeof stateDTOSchema>
export type StateEnum = z.infer<typeof stateEnumSchema>
