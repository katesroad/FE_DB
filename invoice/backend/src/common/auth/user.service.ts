import { InternalServerErrorException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDoc, User } from 'mongo';
import { Model } from 'mongoose';
import { CryptoService } from './crypto/crypto.service';
import { RegisterDto } from './dto/register.dto';
import { IUserRecord } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDoc>,
    private readonly cryptoService: CryptoService,
  ) {}

  /**
   * Create an user with user email, password, and username(optional)
   * @param {RegisterDto} regiserDto user registration data
   * @returns {IUserRecord} user data(without password)
   */
  async createUser(registerDto: RegisterDto): Promise<IUserRecord> {
    const password = this.cryptoService.hashPwd(registerDto.password);
    const userData = { ...registerDto, password };
    try {
      const user = await this.userModel.create(userData as any);
      return this.cleanUser(user.toJSON());
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  /**
   * Find an user with either by email or token
   * @returns{IUserRecord|null} return user record or null record
   */
  async findUser(filter: any): Promise<IUserRecord | null> {
    const { password, ...filterData } = filter;
    const userRecord = await this.userModel.findOne(filterData);
    if (
      !userRecord ||
      (password &&
        !this.cryptoService.comparePwd(password, userRecord.toJSON().password))
    ) {
      return null;
    }
    return this.cleanUser(userRecord.toJSON());
  }

  /**
   * Update an user by user id and update data
   * @param{string} uId the user id
   * @param{Partial<IUserRecord>} update  the update data
   */
  updateUser(uId: string, update: Partial<IUserRecord>) {
    return this.userModel.updateOne({ _id: uId }, update);
  }

  private cleanUser(user: any): IUserRecord {
    const { _id, password, ...userData } = user;
    return { id: _id, ...userData };
  }
}
