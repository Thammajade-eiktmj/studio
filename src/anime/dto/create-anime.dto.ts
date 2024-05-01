import { IsNotEmpty, IsNumber, IsString, IsUUID, Max, Min } from "class-validator";

export class CreateAnimeDto {
  @IsNotEmpty()
  name: string;

  @Min(1)
  @Max(9999)
  year: number;

  @IsUUID()
  studioId: string;
}
