import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Studio } from "../entities/studio.entity";
import { CreateStudioDto } from "./dto/create-studio.dto";
import { UpdateStudioDto } from "./dto/update-studio.dto";

@Injectable()
export class StudioService {
  constructor(
    @InjectRepository(Studio)
    private studioRepository: Repository<Studio>,
  ) {}

  async findAll(): Promise<Studio[]> {
    return this.studioRepository.find();
  }

  async findOne(id: string): Promise<Studio> {
    return await this.studioRepository.findOneBy({ id });
  }

  async create(createStudio: CreateStudioDto): Promise<string> {
    const studio = this.studioRepository.create(createStudio);
    return (await this.studioRepository.save(studio)).id;
  }

  async update(id: string, updateStudio: UpdateStudioDto) {
    return this.studioRepository.update(id, updateStudio);
  }

  async delete(id: string): Promise<void> {
    await this.studioRepository.delete(id);
  }
}
