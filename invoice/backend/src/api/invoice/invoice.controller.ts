import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { InvoiceService } from './invoice.service';

@Controller('api/invoices')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Get()
  getInvoices() {
    return this.invoiceService.getInvoices();
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
  updateInvoice(@Param('id') id: string, update: any) {
    return this.invoiceService.updateInvoice(id, update);
  }
}
