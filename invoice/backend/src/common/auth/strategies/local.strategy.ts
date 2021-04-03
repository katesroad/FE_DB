import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user.service';
import { IUser } from '../user.interface';
import { HelperService } from '../helper.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    private authService: HelperService,
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  // For each strategy, passport will call the verify function(validate)
  // For local strategy, passport expects a validate method with the following signature
  async validate(email: string, password: string): Promise<IUser> {
    console.log(email, password);
    const user = await this.userService.findUser({ email, password });
    if (user) return this.authService.signUser(user);
    throw new UnauthorizedException('Wrong credentials provided');
  }
}
