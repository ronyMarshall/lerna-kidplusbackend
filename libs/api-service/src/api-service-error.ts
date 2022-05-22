import { HttpException } from '@nestjs/common';

export class ApiServiceError extends HttpException {
  constructor(error: any) {
    super(error.response.data, error.response.status);
  }
}
