import { IsNotEmpty } from "class-validator";

export class CreateStudioDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  website: string;
}
