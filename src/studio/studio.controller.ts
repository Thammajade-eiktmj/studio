import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, BadRequestException, NotFoundException, Put } from "@nestjs/common";
import { validate as uuidv4Validate } from "uuid";
import { StudioService } from "./studio.service";
import { CreateStudioDto } from "./dto/create-studio.dto";
import { UpdateStudioDto } from "./dto/update-studio.dto";

@Controller("studio")
export class StudioController {
  constructor(private readonly studioService: StudioService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createStudioDto: CreateStudioDto) {
    return this.studioService.create(createStudioDto);
  }

  @Get()
  findAll() {
    return this.studioService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    if (!uuidv4Validate(id)) throw new BadRequestException("invalid uuid");

    const studio = this.studioService.findOne(id);
    if (!studio) throw new NotFoundException("studio does not exist");

    return studio;
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateStudioDto: UpdateStudioDto) {
    if (!uuidv4Validate(id)) throw new BadRequestException("invalid uuid");

    const studio = this.studioService.update(id, updateStudioDto);
    if (!studio) throw new NotFoundException("studio does not exist");

    return studio;
  }

  @Delete(":id")
  @HttpCode(204)
  remove(@Param("id") id: string) {
    if (!uuidv4Validate(id)) throw new BadRequestException("invalid uuid");

    const studio = this.studioService.delete(id);
    if (!studio) throw new NotFoundException("studio does not exist");

    return studio;
  }
}
