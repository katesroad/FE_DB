import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { InvoicesModule } from './invoices/invoices.module';
import { LogMiddleware } from 'common/log.middleware';

@Module({
  imports: [InvoicesModule, AuthModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('api');
  }
}
