import { Document } from 'mongoose';
export declare type InvoiceDoc = Invoice & Document;
declare class Address {
    street: string;
    city: string;
    postcode: string;
    country: string;
}
declare class Item {
    name: string;
    quantity: number;
    price: number;
    total: number;
}
export declare class Invoice {
    tag: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    senderAddress: Address;
    clientAddress: Address;
    items: Item[];
    total: number;
}
export declare const InvoiceSchema: import("mongoose").Schema<Document<Invoice>, import("mongoose").Model<Document<Invoice>>, undefined>;
export {};
