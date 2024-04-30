import { User } from "../entities/user.entity";

export class UserResponseDto {
  constructor(user: User) {
    this.id = user.id;
    this.login = user.login;
  }

  id: string;
  login: string;
}
