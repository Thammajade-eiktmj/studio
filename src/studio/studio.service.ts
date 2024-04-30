import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Studio } from "../entities/studio.entity";

@Injectable()
export class StudioService {
  constructor(
    @InjectRepository(Studio)
    private studioRepository: Repository<Studio>,
  ) {}

  async findAll(): Promise<Studio[]> {
    const studio = this.studioRepository.find({
      where: {
        deletedAt: null,
      },
    });

    return studio;
  }

  async findOne(id: string): Promise<Studio> {
    const studio = await this.studioRepository.findOne({ where: { id } });
    return studio;
  }

  async create(studio: Partial<Studio>): Promise<Studio> {
    const newstudio = this.studioRepository.create(studio);
    return this.studioRepository.save(newstudio);
  }

  async update(id: string, studio: Partial<Studio>): Promise<Studio> {
    await this.studioRepository.update(id, studio);
    return this.studioRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.studioRepository.createQueryBuilder().softDelete().where("id = :id", { id: id }).execute();
  }
}
