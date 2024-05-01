import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Anime } from "src/entities/anime.entity";
import { Repository } from "typeorm";
import { CreateAnimeDto } from "./dto/create-anime.dto";
import { UpdateAnimeDto } from "./dto/update-anime.dto";

@Injectable()
export class AnimeService {
  constructor(
    @InjectRepository(Anime)
    private animeRepository: Repository<Anime>,
  ) {}

  async findAll(): Promise<Anime[]> {
    return this.animeRepository.find();
  }

  async findOne(id: string): Promise<Anime> {
    return await this.animeRepository.findOneBy({ id });
  }

  async create(createAnime: Partial<CreateAnimeDto>): Promise<string> {
    const anime = this.animeRepository.create(createAnime);
    return (await this.animeRepository.save(anime)).id;
  }

  async update(id: string, anime: Partial<UpdateAnimeDto>) {
    return this.animeRepository.update(id, anime);
  }

  async delete(id: string): Promise<void> {
    await this.animeRepository.delete(id);
  }
}
