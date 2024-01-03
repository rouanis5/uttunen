import { z } from 'zod'

export const operatorDTOSchema = z.enum(['+', '-', '*', '/'])
export type OperatorDTO = z.infer<typeof operatorDTOSchema>
