import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChapterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  duration: number;

  @IsString()
  studioId: string;

  @IsString()
  animeId: string;
}
