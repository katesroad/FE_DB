import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongoModule } from './mongo';

@Module({
  imports: [AuthModule, MongoModule],
})
export class CommonModule {}
