import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'common/auth';
import { InvoicesService } from './invoices.service';

@Controller('api/invoices')
@UseGuards(JwtAuthGuard)
export class InvoicesController {
  constructor(private invoiceService: InvoicesService) {}

  @Get()
  getInvoices(@Query('status') status?: string) {
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

  @Delete(':id')
  deleteInvoice(@Param('id') id: string) {
    return this.invoiceService.deleteInvoice(id);
  }
}
