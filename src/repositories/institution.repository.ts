import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import {
  InstitutionCreateDto,
  InstitutionUpdateDto,
} from '../dto/institution.dto';
import { Institution } from '@prisma/client';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';

@Injectable()
export class InstitutionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: InstitutionCreateDto,
    userId: string,
  ): Promise<Institution> {
    let contactId: string | null = null;
    if (data.contact) {
      const contact = await this.prisma.contact.create({
        data: {
          ...data.contact,
          is_primary: true,
          created_by: userId,
          updated_by: userId,
        },
      });
      contactId = contact.id;
    }
    return await this.prisma.institution.create({
      data: {
        name: data.name,
        denomination: data.denomination,
        language_preference: data.language_preference,
        contact_id: contactId,
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });
  }

  async update(
    institution_id: string,
    data: InstitutionUpdateDto,
    userId: string,
  ): Promise<Institution> {
    // Atualiza dados básicos e o contato, se enviado
    const institution = await this.findById(institution_id);

    return await this.prisma.institution.update({
      where: { id: institution_id },
      data: {
        name: data.name,
        denomination: data.denomination,
        language_preference: data.language_preference,
        contact: data.contact
          ? institution?.contact_id ? {
              update: {
                ...data.contact,
                updated_by: userId,
              },
            } : {
              create: {
                ...data.contact,
                is_primary: true,
                created_by: userId,
                updated_by: userId,
              },
            } : undefined,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Institution> {
    return await this.prisma.institution.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findAll(): Promise<Institution[]> {
    return await this.prisma.institution.findMany({
      where: { is_deleted: false },
    });
  }

  async findById(id: string): Promise<Institution | null> {
    const institution = await this.prisma.institution.findUnique({
      where: { id, is_deleted: false },
     });
    if (!institution) {
      throw new CustomGraphQLError('Institution not found', ErrorCode.NOT_FOUND, 404);
    }
    return institution;
  }

  async findOneByFilters(filters: Partial<Record<keyof Institution, any>>): Promise<Institution | null> {
    const allowedKeys: (keyof Institution)[] = ['name', 'denomination', 'language_preference', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Institution)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.institution.findFirst({
      where: {
        is_deleted: false,
        ...filters,
      },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof Institution, any>>): Promise<Institution[]> {
    const allowedKeys: (keyof Institution)[] = ['name', 'denomination', 'language_preference', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Institution)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.institution.findMany({
      where: {
        is_deleted: false,
        ...filters,
      },
    });
  }
}
