import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ContactCreateDto, ContactUpdateDto, LinkContactDto, TargetEnum } from '../dto/contact.dto';
import { Contact } from '../@generated/contact/contact.model';
import { PrismaClient } from '@prisma/client/extension';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';

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

  async linkContact(data: LinkContactDto): Promise<{ success: boolean; message: string }> {
    const contact = await this.prisma.contact.findUnique({ where: { id: data.contact_id } });
    if (!contact) {
      throw new CustomGraphQLError(`Contact was not found.`, ErrorCode.NOT_FOUND, 404);
    }
    
    const prismaFindServices: Record<TargetEnum, PrismaClient> = {
      church: this.prisma.church.findUnique({
        where: { id: data.target_id },
      }),
      event: this.prisma.event.findUnique({
        where: { id: data.target_id },
      }),
      department: this.prisma.department.findUnique({
        where: { id: data.target_id },
      }),
      institution: this.prisma.institution.findUnique({
        where: { id: data.target_id },
      }),
      user: this.prisma.user.findUnique({
        where: { id: data.target_id },
      }),
    };
    
    const prismaFindService = await prismaFindServices[data.target];

    if (!prismaFindService) {
      throw new CustomGraphQLError(`Target was not found.`, ErrorCode.NOT_FOUND, 404);
    }
    
    // Mapeamento seguro de TargetEnum para os serviços Prisma correspondentes
    const prismaUpdateServices: Record<TargetEnum, PrismaClient> = {
      church: this.prisma.church.update({
        where: { id: data.target_id },
        data: { contact_id: data.contact_id },
      }),
      event: this.prisma.event.update({
        where: { id: data.target_id },
        data: { contact_id: data.contact_id },
      }),
      department: this.prisma.department.update({
        where: { id: data.target_id },
        data: { contact_id: data.contact_id },
      }),
      institution: this.prisma.institution.update({
        where: { id: data.target_id },
        data: { contact_id: data.contact_id },
      }),
      user: this.prisma.user.update({
        where: { id: data.target_id },
        data: { contact_id: data.contact_id },
      }),
    };

    const targetService = await prismaUpdateServices[data.target];

    if (!targetService) {
      throw new Error(`Target ${data.target} is not supported.`);
    }

    return { success: true, message: `Contact linked to ${data.target} successfully.` };
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
