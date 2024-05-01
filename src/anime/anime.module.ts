import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AnimeService } from "./anime.service";
import { AnimeController } from "./anime.controller";
import { Anime } from "src/entities/anime.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Anime])],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AnimeModule {}
