import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('log');
  use(req: Request, res: any, next: () => void) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = req.path;
    this.logger.log(`ip:${ip} requested ${path} }`);
    next();
  }
}
