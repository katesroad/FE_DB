import { IsString, IsOptional } from 'class-validator';
import { LoginDto } from './login.dto';

export class RegisterDto extends LoginDto {
  @IsString()
  @IsOptional()
  username?: string;
}
