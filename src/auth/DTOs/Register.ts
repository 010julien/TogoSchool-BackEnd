import { IsEmail, IsNotEmpty, IsEnum, MinLength } from 'class-validator';
import { UserRole } from '../user.entity';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}
