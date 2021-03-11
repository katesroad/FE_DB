import { Module } from '@nestjs/common';
import { MongoModule } from 'common/mongo';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { HelperService } from './helper.service';

@Module({
  imports: [MongoModule],
  controllers: [InvoicesController],
  providers: [InvoicesService, HelperService],
})
export class InvoicesModule {}
