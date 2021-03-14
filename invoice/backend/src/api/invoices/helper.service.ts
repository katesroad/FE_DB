import { Injectable } from '@nestjs/common';

@Injectable()
export class HelperService {
  makeTag() {
    const letters = this.makeId('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 2);
    const numbers = this.makeId('0123456789', 4);
    return `${letters}${numbers}`;
  }

  private makeId(characters: string, len: number) {
    var result = '';
    var charactersLength = characters.length;
    for (var i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
