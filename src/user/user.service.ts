import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { UserResponseDto } from "./dto/user-response.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<UserResponseDto> {
    return await this.userRepository.findOneBy({ id });
  }

  async create(createUser: Partial<User>): Promise<string> {
    const user = this.userRepository.create(createUser);
    return (await this.userRepository.save(user)).id;
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.softDelete(id);
  }
}
