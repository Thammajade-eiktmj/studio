import { IsNotEmpty, IsNumber, IsString, IsUUID, Max, Min } from "class-validator";

export class CreateChapterDto {
  @IsNotEmpty()
  name: string;

  @Min(0)
  @Max(24)
  duration: number;

  @IsUUID()
  studioId: string;

  @IsUUID()
  animeId: string;
}
