import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
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
    return this.invoiceModel.findOne({ _id: id }).then((doc) => {
      if (!doc) throw new BadRequestException(`Can't find invoice with id#${id}`);
      return this.cleanDoc(doc);
    });
  }

  createInvoice(createInvoiceDto: any) {
    const items = createInvoiceDto.items;
    const data = { ...createInvoiceDto, ...this.calcTotal(items) };
    return this.invoiceModel
      .create(data)
      .then((doc) => this.cleanDoc(doc))
      .catch((e) => e);
  }

  updateInvoice(id: string, updateInvoiceDto: any) {
    let { items, ...update } = updateInvoiceDto;
    if (items) {
      update = { ...update, ...this.calcTotal(items) };
    }
    return this.invoiceModel
      .updateOne({ _id: id }, update)
      .then(() => this.invoiceModel.findOne({ _id: id }))
      .then((doc) => {
        if (doc) return this.cleanDoc(doc);
        else throw new BadRequestException(`Can't find invoice#${id}`);
      });
  }

  private cleanDoc(doc) {
    if (!doc) return null;
    const { _id, ...data } = doc.toJSON();
    return { id: _id, ...data };
  }

  private calcTotal(items: any[]) {
    let total = 0;
    items.map((item) => {
      item.total = item.price * item.quantity;
      total += item.total;
    });
    return { items, total };
  }
}
