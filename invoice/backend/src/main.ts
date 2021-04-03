import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidUnknownValues: true,
    }),
  );
  app.use(rateLimit({ windowMs: 1000, max: 10 }));
  app.use(helmet());
  app.use(cookieParser());

  const port = config.get('app.port') || 3000;
  await app.listen(port, () => {
    console.log(`\n
    ==============================================================
           Server started at port:${port}
    ==============================================================
    \n`);
  });
}
bootstrap();
