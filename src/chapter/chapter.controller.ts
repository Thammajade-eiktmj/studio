import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, BadRequestException, NotFoundException, Put } from "@nestjs/common";
import { ChapterService } from "./chapter.service";
import { validate as uuidv4Validate } from "uuid";
import { CreateChapterDto } from "./dto/create-chapter.dto";
import { UpdateChapterDto } from "./dto/update-chapter.dto";

@Controller("chapter")
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createChapterDto: CreateChapterDto) {
    return this.chapterService.create(createChapterDto);
  }

  @Get()
  findAll() {
    return this.chapterService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    if (!uuidv4Validate(id)) throw new BadRequestException("invalid uuid");

    const chapter = this.chapterService.findOne(id);
    if (!chapter) throw new NotFoundException("chapter does not exist");

    return chapter;
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateChapterDto: UpdateChapterDto) {
    if (!uuidv4Validate(id)) throw new BadRequestException("invalid uuid");

    const chapter = this.chapterService.update(id, updateChapterDto);
    if (!chapter) throw new NotFoundException("chapter does not exist");

    return chapter;
  }

  @Delete(":id")
  @HttpCode(204)
  remove(@Param("id") id: string) {
    if (!uuidv4Validate(id)) throw new BadRequestException("invalid uuid");

    const chapter = this.chapterService.delete(id);
    if (!chapter) throw new NotFoundException("chapter does not exist");

    return chapter;
  }
}
