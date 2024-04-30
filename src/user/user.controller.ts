import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, BadRequestException, NotFoundException } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { validate as uuidv4Validate } from "uuid";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    if (!uuidv4Validate(id)) throw new BadRequestException("invalid uuid");

    const user = this.userService.findOne(id);
    if (!user) throw new NotFoundException("user does not exist");

    return user;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(":id")
  @HttpCode(204)
  remove(@Param("id") id: string) {
    if (!uuidv4Validate(id)) throw new BadRequestException("invalid uuid");

    const user = this.userService.delete(id);
    if (!user) throw new NotFoundException("user does not exist");

    return user;
  }
}
