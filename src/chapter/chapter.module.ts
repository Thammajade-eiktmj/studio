import { Module } from "@nestjs/common";
import { ChapterController } from "./chapter.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Chapter } from "src/entities/chapter.entity";
import { ChapterService } from "./chapter.service";

@Module({
  imports: [TypeOrmModule.forFeature([Chapter])],
  controllers: [ChapterController],
  providers: [ChapterService],
})
export class ChapterModule {}
