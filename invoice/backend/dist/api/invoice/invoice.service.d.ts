import { InvoiceDoc } from 'common/mongo';
import { Model } from 'mongoose';
export declare class InvoiceService {
    private readonly invoiceModel;
    constructor(invoiceModel: Model<InvoiceDoc>);
    getInvoices(): Promise<any[]>;
    getInvoice(id: string): Promise<any>;
    createInvoice(createInvoiceDto: any): Promise<any>;
    updateInvoice(id: string, updateInvoiceDto: any): import("mongoose").Query<InvoiceDoc, InvoiceDoc>;
    private cleanDoc;
}
