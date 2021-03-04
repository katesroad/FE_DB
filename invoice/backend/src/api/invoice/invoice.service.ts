import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice, InvoiceDoc } from 'common/mongo';
import { Model } from 'mongoose';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel(Invoice.name)
    private readonly invoiceModel: Model<InvoiceDoc>,
  ) {}

  getInvoices() {
    return this.invoiceModel
      .find()
      .then((docs) => docs.map((doc) => this.cleanDoc(doc)));
  }

  getInvoice(id: string) {
    return this.invoiceModel.findOne({ tag: id }).then((doc) => {
      if (!doc) throw new NotFoundException(`Can't find invoice with id#${id}`);
      return this.cleanDoc(doc);
    });
  }

  createInvoice(createInvoiceDto: any) {
    const { items = [], ...data } = createInvoiceDto;
    let total = 0;
    items.map((item) => {
      item.total = item.price * item.quantity;
      total += item.total;
    });
    return this.invoiceModel
      .create({ ...data, total, items })
      .then((doc) => this.cleanDoc(doc))
      .catch((e) => e);
  }

  updateInvoice(id: string, updateInvoiceDto: any) {
    return this.invoiceModel.findOneAndUpdate({ _id: id }, updateInvoiceDto);
  }

  private cleanDoc(doc) {
    const { _id, ...data } = doc.toJSON();
    return { id: _id, ...data };
  }
}
