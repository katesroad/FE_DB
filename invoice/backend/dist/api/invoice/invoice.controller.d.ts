/// <reference types="mongoose" />
import { InvoiceService } from './invoice.service';
export declare class InvoiceController {
    private invoiceService;
    constructor(invoiceService: InvoiceService);
    getInvoices(): Promise<any[]>;
    createInvoice(createInvoiceDto: any): Promise<any>;
    getInvoice(id: string): Promise<any>;
    updateInvoice(id: string, update: any): import("mongoose").Query<import("../../common/mongo").InvoiceDoc, import("../../common/mongo").InvoiceDoc>;
}
