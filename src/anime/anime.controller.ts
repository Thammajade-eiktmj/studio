import { Controller, Get, Post, Body, Param, Delete, HttpCode, BadRequestException, NotFoundException, Put } from "@nestjs/common";
import { validate as uuidv4Validate } from "uuid";
import { AnimeService } from "./anime.service";
import { UpdateAnimeDto } from "./dto/update-anime.dto";
import { CreateAnimeDto } from "./dto/create-anime.dto";

@Controller("anime")
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createAnimeDto: CreateAnimeDto) {
    return this.animeService.create(createAnimeDto);
  }

  @Get()
  findAll() {
    return this.animeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    if (!uuidv4Validate(id)) throw new BadRequestException("invalid uuid");

    const anime = this.animeService.findOne(id);
    if (!anime) throw new NotFoundException("anime does not exist");

    return anime;
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateAnimeDto: UpdateAnimeDto) {
    if (!uuidv4Validate(id)) throw new BadRequestException("invalid uuid");

    const anime = this.animeService.update(id, updateAnimeDto);
    if (!anime) throw new NotFoundException("anime does not exist");

    return anime;
  }

  @Delete(":id")
  @HttpCode(204)
  remove(@Param("id") id: string) {
    if (!uuidv4Validate(id)) throw new BadRequestException("invalid uuid");

    const anime = this.animeService.delete(id);
    if (!anime) throw new NotFoundException("anime does not exist");

    return anime;
  }
}
