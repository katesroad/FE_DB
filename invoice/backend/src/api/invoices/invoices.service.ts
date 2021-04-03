import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice, InvoiceDoc } from 'common/mongo';
import { Model } from 'mongoose';
import { HelperService } from './helper.service';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectModel(Invoice.name)
    private readonly invoiceModel: Model<InvoiceDoc>,
    private readonly helperService: HelperService,
  ) {}

  getInvoices(userId: string, filterStatus?: string) {
    let filter: any = { author: userId };
    if (filterStatus) {
      filter.status = { $in: filterStatus.split(',') };
    }
    return this.invoiceModel
      .find(filter, {
        status: 1,
        paymentDue: 1,
        clientName: 1,
        tag: 1,
        total: 1,
        author: 1,
      })
      .then((docs) => docs.map((doc) => this.cleanDoc(doc)));
  }

  getInvoice(userId: string, id: string) {
    return this.invoiceModel
      .findOne({ _id: id, author: userId })
      .then((doc) => {
        if (!doc)
          throw new BadRequestException(`Can't find invoice with id#${id}`);
        return this.cleanDoc(doc);
      });
  }

  createInvoice(userId: string, createInvoiceDto: any) {
    const items = createInvoiceDto.items;
    const tag = this.helperService.makeTag();
    const data = {
      ...createInvoiceDto,
      tag,
      ...this.calcTotal(items),
      author: userId,
    };
    return this.invoiceModel
      .create(data)
      .then((doc) => this.cleanDoc(doc))
      .catch((e) => e);
  }

  updateInvoice(userId: string, id: string, updateInvoiceDto: any) {
    let { items, ...update } = updateInvoiceDto;
    if (items) {
      update = { ...update, ...this.calcTotal(items) };
    }
    return this.invoiceModel
      .findOneAndUpdate({ _id: id, author: userId }, update, {
        returnOriginal: false, // returns the new version of doc after updating
      })
      .then((doc) => {
        if (doc) return this.cleanDoc(doc);
        else {
          throw new BadRequestException(`Can't find invoice#${id} for user.`);
        }
      });
  }

  deleteInvoice(userId: string, id: string) {
    return this.invoiceModel.findOneAndDelete({ _id: id, author: userId });
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
