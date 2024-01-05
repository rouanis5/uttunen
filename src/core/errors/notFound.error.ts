import { CustomError } from '#core/errors'

export class NotFoundError extends CustomError {
  constructor(message?: string) {
    super(message ?? 'Not Found', 404)
  }
}
