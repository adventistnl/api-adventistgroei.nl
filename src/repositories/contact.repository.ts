import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ContactCreateDto, ContactUpdateDto } from '../dto/contact.dto';
import { Contact } from '../@generated/contact/contact.model';

@Injectable()
export class ContactRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ContactCreateDto, userId: string): Promise<Contact> {
    return this.prisma.contact.create({
      data: {
        ...data,
        is_primary: true, // Default value
        created_by: userId,
        updated_by: userId,
      },
    });
  }

  async update(data: ContactUpdateDto): Promise<Contact> {
    return this.prisma.contact.update({
      where: { id: data.id },
      data,
    });
  }

  async softDelete(id: string, userId: string): Promise<Contact> {
    return this.prisma.contact.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
      },
    });
  }

  async findById(id: string): Promise<Contact | null> {
    return this.prisma.contact.findUnique({ where: { id } });
  }

  async findAll(): Promise<Contact[]> {
    return this.prisma.contact.findMany();
  }

    async findOneByFilters(filters: Partial<Record<keyof Contact, any>>): Promise<Contact | null> {
      const allowedKeys: (keyof Contact)[] = ['Institution', 'name', 'is_deleted', 'email', 'phone', 'is_primary'];
  
      for (const key of Object.keys(filters)) {
        if (!allowedKeys.includes(key as keyof Contact)) {
          throw new Error(`Invalid filter key: ${key}`);
        }
      }
  
      return this.prisma.contact.findFirst({
        where: {
          is_deleted: false,
          ...filters,
        },
      });
    }
  
    async findManyByFilters(filters: Partial<Record<keyof Contact, any>>): Promise<Contact[]> {
      const allowedKeys: (keyof Contact)[] = ['Institution', 'name', 'is_deleted', 'email', 'phone', 'is_primary'];
  
      for (const key of Object.keys(filters)) {
        if (!allowedKeys.includes(key as keyof Contact)) {
          throw new Error(`Invalid filter key: ${key}`);
        }
      }
  
      return this.prisma.contact.findMany({
        where: {
          is_deleted: false,
          ...filters,
        },
      });
    }
}
