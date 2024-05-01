import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Chapter } from "src/entities/chapter.entity";
import { Repository } from "typeorm";
import { CreateChapterDto } from "./dto/create-chapter.dto";

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private chapterRepository: Repository<Chapter>,
  ) {}

  async findAll(): Promise<Chapter[]> {
    const chapter = this.chapterRepository.find();

    return chapter;
  }

  async findOne(id: string): Promise<Chapter> {
    return await this.chapterRepository.findOneBy({ id });
  }

  async create(createChapter: Partial<CreateChapterDto>): Promise<string> {
    const chapter = this.chapterRepository.create(createChapter);
    return (await this.chapterRepository.save(chapter)).id;
  }

  async update(id: string, chapter: Partial<Chapter>) {
    return this.chapterRepository.update(id, chapter);
  }

  async delete(id: string): Promise<void> {
    await this.chapterRepository.delete(id);
  }
}
