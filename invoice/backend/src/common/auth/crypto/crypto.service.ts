import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptoService {
  constructor(private readonly jwtService: JwtService) {}
  /**
   *  hash given password
   * @param pwd {string} plain password
   * @returns{string} hashed password
   */
  hashPwd(pwd: string): string {
    return bcrypt.hashSync(pwd, 10);
  }

  /**
   * compare plain password with hashed password
   * @param pwd {string} the plain password
   * @param hashedPwd {string} the hashed password
   * @returns {boolean} the comparation result
   */
  comparePwd(pwd: string, hashedPwd?: string): boolean {
    return bcrypt.compareSync(pwd, hashedPwd);
  }

  /**
   * generate refresh token based on payload
   * @param payload{any}
   * @returns token the refresh token
   */
  signRefreshToken(payload: any): string {
    return this.jwtService.sign(payload);
  }

  /**
   * verify refresh token
   * @param token{string} the refresh token
   * @returns verification boolean result
   */
  verifyRefreshToken(token: string): boolean {
    try {
      return !!this.jwtService.verify(token);
    } catch (e) {
      console.log(`Refresh token verification:`);
      console.log(e, '\n');
      return false;
    }
  }
}
