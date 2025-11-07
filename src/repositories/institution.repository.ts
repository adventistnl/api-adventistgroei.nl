import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import {
  InstitutionCreateDto,
  InstitutionUpdateDto,
} from '../dto/institution.dto';
import { Institution, LanguagePreference } from '@prisma/client';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { validateAndConvertLanguagePreference } from 'src/common/utils/language-preference.util';

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

    return this.prisma.institution.create({
      data: {
        description: data.description,
        name: data.name,
        denomination: data.denomination,
        language_preference: validateAndConvertLanguagePreference(data.language_preference),
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
    if (!institution) {
      throw new Error(`Institution with ID ${institution_id} not found`);
    }
    let language_preference: LanguagePreference | undefined = undefined;
    if (data.language_preference) {
      language_preference = validateAndConvertLanguagePreference(data.language_preference);
    }


    const updateData = {
      description: data.description,
      name: data.name,
      denomination: data.denomination,
      language_preference,
      contact: data.contact
        ? (institution?.contact_id && institution.contact_id.trim() !== '') ? {
            update: {
              ...data.contact,
              updated_by: userId,
            },
          } : {
            create: {
              // Remover o campo id quando estamos criando um novo contato
              ...Object.fromEntries(
                Object.entries(data.contact).filter(([key]) => key !== 'id')
              ),
              is_primary: true,
              created_by: userId,
              updated_by: userId,
            },
          } : undefined,
      updated_by: userId,
    };

    return await this.prisma.institution.update({
      where: { id: institution_id },
      data: updateData,
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
      include: {
        _count: {
          select: {
            churches: true,
            departments: true,
            users: true,
            annual_budgets: true,
            // Adicione outros relacionamentos se necessário
          },
        },
      },
    });
  }

  async findById(id: string): Promise<Institution | null> {
    const institution = await this.prisma.institution.findUnique({
      where: { id, is_deleted: false },
      include: {
        _count: {
          select: {
            churches: true,
            departments: true,
            users: true,
            annual_budgets: true,
            // Adicione outros relacionamentos se necessário
          },
        },
      },
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
