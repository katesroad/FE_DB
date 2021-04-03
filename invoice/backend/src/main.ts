import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { ErrorFilter, ResponseInterceptor } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidUnknownValues: true,
    }),
  );
  app.useGlobalFilters(new ErrorFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());

  app.use(rateLimit({ windowMs: 1000, max: 10 }));
  app.use(helmet());
  app.use(cookieParser());
  app.enableCors({ credentials: true, origin: true });

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
