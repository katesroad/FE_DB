import { Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [MongoModule],
})
export class CommonModule {}
