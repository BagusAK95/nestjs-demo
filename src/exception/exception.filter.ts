import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = exception.getStatus();
    if (!status) {
      status = 500;
    }

    let message: any = exception.getResponse();
    if (typeof message === 'object') {
      message = message.message;
    }

    if (status === 500) {
      this.logger.error(exception.stack);
    }

    response.status(status).json({ message });
  }
}
