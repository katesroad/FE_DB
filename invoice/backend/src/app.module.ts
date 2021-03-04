import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from 'config';
import { CommonModule } from './common/common.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config as any],
    }),
    ApiModule,
    CommonModule,
  ],
})
export class AppModule {}
