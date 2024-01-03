import { z } from 'zod'

const digitEnum = [
  '.',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
] as const

export const digitDtoSchema = z.enum(digitEnum)
export type DigitDTO = z.infer<typeof digitDtoSchema>
