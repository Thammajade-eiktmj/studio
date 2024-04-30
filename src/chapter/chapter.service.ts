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
    const chapter = this.chapterRepository.find({
      where: {
        deletedAt: null,
      },
    });

    return chapter;
  }

  async findOne(id: string): Promise<Chapter> {
    return await this.chapterRepository.findOne({ where: { id } });
  }

  async create(chapter: Partial<CreateChapterDto>): Promise<Chapter> {
    const newchapter = this.chapterRepository.create(chapter);
    return this.chapterRepository.save(newchapter);
  }

  async update(id: string, chapter: Partial<Chapter>): Promise<Chapter> {
    await this.chapterRepository.update(id, chapter);
    return this.chapterRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.chapterRepository.createQueryBuilder().softDelete().where("id = :id", { id: id }).execute();
  }
}
