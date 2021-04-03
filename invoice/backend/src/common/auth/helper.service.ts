import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from './crypto/crypto.service';
import { IAutheUser, IUser } from './user.interface';
import { UserService } from './user.service';

type TokenType = 'access' | 'token';
@Injectable()
export class HelperService {
  constructor(
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
    private readonly confService: ConfigService,
    private readonly userService: UserService,
  ) {}

  /**
   * Sign user with given user data
   * @params {IUser}
   * @returns {IAutheUser} user data with authentication information(access token and refresh token)
   */
  async signUser(user: IUser): Promise<IAutheUser> {
    const payload = { ...user, sub: user.id };
    const accessToken = this.jwtService.sign({ sub: payload.id });
    const refreshToken = this.cryptoService.signRefreshToken({ sub: user.id });
    await this.userService.updateUser(payload.sub, { token: refreshToken });
    return { ...user, token: refreshToken, access: accessToken };
  }

  /**
   * Get authentication cookie(access and refresh token cookie) for an authenticated user
   * @params {IAuthedUser} authedUser the user data with authentication information
   * @returns {token:Record<key, string>, access:Record<key, string>} the authentication cookie information
   */
  getAuthCookies(authedUser: IAutheUser) {
    const { access, token } = authedUser;
    return {
      access: this.getTokenCookie('access', access),
      token: this.getTokenCookie('token', token),
    };
  }

  /**
   * Get authentication cookie(access and refresh token cookie) for an authenticated user
   * @params {IAuthedUser} authedUser the user data with authentication information
   * @returns {token:Record<key, string>, access:Record<key, string>} the authentication cookie information
   * with expiration time as zero
   */
  getCleanedAuthCookies(authedUser: IAutheUser) {
    const { access, token } = authedUser;
    return {
      access: this.getTokenCookie('access', access, true),
      token: this.getTokenCookie('token', token, true),
    };
  }

  /**
   * Get authentication cookie.
   * @params {TokenType} the token type, etiher be "token" or "refresh"
   * @params {string} the token value
   * @param {boolean} isClean  boolean type, providing true value means clean the cookie
   * @returns {<Record<string, string>}
   * with expiration time as zeo
   */
  private getTokenCookie(
    type: TokenType,
    value: string,
    doClean?: boolean,
  ): Record<string, string> {
    let { name, expiresIn } = this.confService.get(`app.auth.${type}`);
    let cookieValue = value;
    if (doClean) {
      expiresIn = 0;
      cookieValue = '';
    }
    const isProd = process.env.NODE_ENV === 'production';
    let cookie = `${name}=${cookieValue};HttpOnly=true;Path=/;Max-Age=${expiresIn};`;
    if (isProd) {
      cookie += 'Secure=true;SameSite=None';
    }
    return { name, value: cookie };
  }
}
