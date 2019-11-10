import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super({
      error: 'Forbidden',
      statusCode: HttpStatus.FORBIDDEN,
    }, HttpStatus.FORBIDDEN);
  }
}
