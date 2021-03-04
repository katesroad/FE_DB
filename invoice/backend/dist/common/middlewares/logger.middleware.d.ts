import { NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
export declare class LoggerMiddleware implements NestMiddleware {
    private readonly logger;
    use(req: Request, res: any, next: () => void): void;
}
