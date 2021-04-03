import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { UserService } from './user.service';
import { HelperService } from './helper.service';
import { CryptoModule } from './crypto/crypto.module';
import { MongoModule } from 'common/mongo';
import { ACCESS_NAME } from 'config';

@Global()
@Module({
  imports: [
    CryptoModule,
    MongoModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (conf: ConfigService) => {
        const { secret, expiresIn } = conf.get(ACCESS_NAME);
        return { secret, signOptions: { expiresIn: `${expiresIn}` } };
      },
    }),
  ],
  providers: [UserService, LocalStrategy, JwtStrategy, HelperService],
  exports: [HelperService, UserService],
})
export class AuthModule {}
