import { Module } from "@nestjs/common";
import { StudioController } from "./studio.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Studio } from "src/entities/studio.entity";
import { StudioService } from "./studio.service";

@Module({
  imports: [TypeOrmModule.forFeature([Studio])],
  controllers: [StudioController],
  providers: [StudioService],
})
export class StudioModule {}
