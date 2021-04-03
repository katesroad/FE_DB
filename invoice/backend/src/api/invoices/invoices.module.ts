import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongoModule } from 'mongo';
import { LoggerMiddleware } from 'common/middlewares';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { HelperService } from './helper.service';

@Module({
  imports: [MongoModule],
  controllers: [InvoicesController],
  providers: [InvoicesService, HelperService],
})
export class InvoicesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/v1');
  }
}
