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
import { User } from 'common';
import { JwtAuthGuard } from 'common/auth';
import { InvoicesService } from './invoices.service';

@Controller('api/invoices')
@UseGuards(JwtAuthGuard)
export class InvoicesController {
  constructor(private invoiceService: InvoicesService) {}

  @Get()
  getInvoices(@User('id') userId: string, @Query('status') status?: string) {
    return this.invoiceService.getInvoices(userId, status);
  }

  @Post()
  createInvoice(@User('id') userId: string, @Body() createInvoiceDto: any) {
    return this.invoiceService.createInvoice(userId, createInvoiceDto);
  }

  @Get(':id')
  getInvoice(@User('id') userId: string, @Param('id') id: string) {
    return this.invoiceService.getInvoice(userId, id);
  }

  @Patch(':id')
  updateInvoice(
    @User('id') userId: string,
    @Param('id') id: string,
    @Body() update: any,
  ) {
    return this.invoiceService.updateInvoice(userId, id, update);
  }

  @Delete(':id')
  deleteInvoice(@User('id') userId, @Param('id') id: string) {
    return this.invoiceService.deleteInvoice(userId, id);
  }
}
