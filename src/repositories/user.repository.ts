import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserCreateDto, UserUpdateDto } from '../dto/user.dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UserCreateDto): Promise<User> {
    let contactId: string | null = null;
    if (data.contact) {
      const contact = await this.prisma.contact.create({
        data: {
          ...data.contact,
          is_primary: true,
          created_by: 'self',
          updated_by: 'self',
        },
      });
      contactId = contact.id;
    }
    // Hash da senha antes de salvar
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const userData = {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        language_preference: data.language_preference,
        contact_id: contactId,
        created_by: 'self',
        updated_by: 'self',
        is_deleted: false,
        church_id: data.church_id,
        institution_id: data.institution_id,
      };
      return await this.prisma.user.create({ data: userData });
  }

  async update(data: UserUpdateDto, userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id: data.id } });
    if (!user) throw new Error('User not found');
    const contactId = user.contact_id;
    if (data.contact && contactId) {
      await this.prisma.contact.update({
        where: { id: contactId },
        data: {
          ...data.contact,
          updated_by: userId,
        },
      });
    }
    return await this.prisma.user.update({
      where: { id: data.id },
      data: {
        institution_id: data.institution_id,
        church_id: data.church_id ? data.church_id : '',
        name: data.name,
        email: data.email,
        password: data.password,
        language_preference: data.language_preference,
        contact_id: contactId,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({ where: { is_deleted: false } });
  }

  async findById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id, is_deleted: false },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findFirst({
      where: { email, is_deleted: false },
    });
  }
}
