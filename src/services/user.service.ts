import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserCreateDto } from '../dto/user-create.dto';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findById(id: string): Promise<User | null> {
    return await this.userRepository.findById(id);
  }

  async create(data: UserCreateDto): Promise<User> {
    const prismaData: Prisma.UserCreateInput = {
      institution: { connect: { id: data.institution_id } },
      church: { connect: { id: data.church_id } },
      contact: { connect: { id: data.contact_id } },
      name: data.name,
      email: data.email,
      password: data.password,
      language_preference: data.language_preference,
      created_by: '', // ajuste conforme regra de negócio
      updated_by: '', // ajuste conforme regra de negócio
      is_deleted: false,
    };
    return await this.userRepository.create(prismaData);
  }
}
