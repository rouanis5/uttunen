import { CustomError } from './custom.error'

export class NotFoundError extends CustomError {
  constructor(message?: string) {
    super(message ?? 'Not Found', 404)
  }
}
