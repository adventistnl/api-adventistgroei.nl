import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserCreateDto, UserUpdateDto } from '../dto/user.dto';
import { User } from '@prisma/client';
import { UserWithRoles } from 'src/models';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: UserCreateDto): Promise<Omit<User, 'password'>> {
    return await this.userRepository.create(data);
  }

  async updateUser(user_to_update_id: string, data: UserUpdateDto, requester_id: string): Promise<Omit<User, 'password'>> {
    return await this.userRepository.update(user_to_update_id, data, requester_id);
  }

  async deleteUser(id: string, userId: string): Promise<Omit<User, 'password'>> {
    return await this.userRepository.softDelete(id, userId);
  }

  async getUsers(): Promise<Omit<User, 'password'>[]> {
    return await this.userRepository.findAll();
  }

  async getUserById(id: string): Promise<Omit<User, 'password'> | null> {
    return await this.userRepository.findById(id);
  }

  async findByEmail(email: string): Promise<UserWithRoles | null> {
    return await this.userRepository.findByEmail(email);
  }
}
