import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TOKEN_NAME } from 'config';
import {
  HelperService,
  IAutheUser,
  RegisterDto,
  UserService,
  CryptoService,
} from 'common/auth';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly helperService: HelperService,
    private readonly confService: ConfigService,
    private readonly crytoService: CryptoService,
  ) {}

  async registerUser(registerDto: RegisterDto): Promise<IAutheUser> {
    const user = await this.userService.createUser(registerDto);
    return this.helperService.signUser(user);
  }

  async logoutUser(user: IAutheUser): Promise<void> {
    await this.userService.updateUser(user.id, { token: null });
  }

  async renewToken(cookies: Record<string, string>): Promise<IAutheUser> {
    const { name } = this.confService.get(TOKEN_NAME);
    const token = cookies[name];
    if (!token) {
      throw new UnauthorizedException('Wrong credentials');
    }

    const user = await this.userService.findUser({ token });
    if (!user) {
      throw new UnauthorizedException('Wrong credentials');
    }

    if (!this.crytoService.verifyRefreshToken(token)) {
      throw new UnauthorizedException(`Credential is expired.`);
    }

    return this.helperService.signUser(user);
  }
}
