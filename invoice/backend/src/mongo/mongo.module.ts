import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema, User, UserSchema } from './schemas';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Invoice.name, schema: InvoiceSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  exports: [
    MongooseModule.forFeature([
      { name: Invoice.name, schema: InvoiceSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
})
export class MongoModule {}
