import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [InvoicesModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
