import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Status } from 'common/mongo';
import { InvoicesService } from './invoices.service';

@Controller('api/invoices')
export class InvoicesController {
  constructor(private invoiceService: InvoicesService) {}

  @Get()
  getInvoices(@Query('status') status?: Status) {
    return this.invoiceService.getInvoices(status);
  }

  @Post()
  createInvoice(@Body() createInvoiceDto: any) {
    return this.invoiceService.createInvoice(createInvoiceDto);
  }

  @Get(':id')
  getInvoice(@Param('id') id: string) {
    return this.invoiceService.getInvoice(id);
  }

  @Patch(':id')
  updateInvoice(@Param('id') id: string, @Body() update: any) {
    return this.invoiceService.updateInvoice(id, update);
  }
}
