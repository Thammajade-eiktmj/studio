import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  login: string;

  @MinLength(6)
  @MaxLength(24)
  password: string;
}
