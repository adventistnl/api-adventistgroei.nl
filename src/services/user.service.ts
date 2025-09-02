import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserCreateDto, UserUpdateDto } from '../dto/user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: UserCreateDto, userId: string): Promise<User> {
    return await this.userRepository.create(data, userId);
  }

  async updateUser(data: UserUpdateDto, userId: string): Promise<User> {
    return await this.userRepository.update(data, userId);
  }

  async deleteUser(id: string, userId: string): Promise<User> {
    return await this.userRepository.softDelete(id, userId);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.userRepository.findById(id);
  }
}
