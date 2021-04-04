import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import {
  JwtAuthGuard,
  LocalAuthGuard,
  RegisterDto,
  HelperService,
  IAutheUser,
} from 'common/auth';
import { Cookies } from 'common/decorators';
import { AuthService } from './auth.service';

@Controller('/api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly helperService: HelperService,
  ) {}

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: any, @Res() res: Response) {
    const user = req.user as IAutheUser;
    return this.handleAuthedRequest(res, user);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
    const user = await this.authService.registerUser(registerDto);
    return this.handleAuthedRequest(res, user);
  }

  @Get('token')
  async renewToken(
    @Cookies() cookies: Record<string, string>,
    @Res() res: Response,
  ) {
    const user = await this.authService.renewToken(cookies);
    if (user) return this.handleAuthedRequest(res, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/logout')
  async logout(@Req() req: any, @Res() res: Response) {
    const user = req.user as IAutheUser;
    await this.authService.logoutUser(user);
    return this.handleAuthedRequest(res, user, true);
  }

  private handleAuthedRequest(
    res: Response,
    user: IAutheUser,
    doClean?: boolean,
  ) {
    const { access, token } = doClean
      ? this.helperService.getCleanedAuthCookies(user)
      : this.helperService.getAuthCookies(user);

    res.setHeader('Set-Cookie', [access.value, token.value]);

    const data = doClean ? null : user;
    res.json({ data });
  }
}
