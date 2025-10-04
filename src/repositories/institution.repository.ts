import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import {
  InstitutionCreateDto,
  InstitutionUpdateDto,
} from '../dto/institution.dto';
import { AnnualBudget, Institution, LanguagePreference, Prisma } from '@prisma/client';
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
    const { annual_budget: annualBudgetData } = data
    let annual_budget: AnnualBudget | undefined;
    if (annualBudgetData) {
      annual_budget = await this.prisma.annualBudget.create({
        data: {
          balance: new Prisma.Decimal(annualBudgetData.balance),
          planned_budget: new Prisma.Decimal(annualBudgetData.planned_budget),
          total_expenses: new Prisma.Decimal(annualBudgetData.total_expenses),
          year: annualBudgetData.year,
          created_by: userId,
          updated_by: userId,
        },
      });
    }

    return this.prisma.institution.create({
      data: {
        description: data.description,
        name: data.name,
        denomination: data.denomination,
        language_preference: validateAndConvertLanguagePreference(data.language_preference),
        contact_id: contactId,
        annual_budget_id: annual_budget ? annual_budget.id : undefined,
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
    let language_preference: LanguagePreference | undefined = undefined;
    if (data.language_preference) language_preference = validateAndConvertLanguagePreference(data.language_preference);


    return await this.prisma.institution.update({
      where: { id: institution_id },
      data: {
        description: data.description,
        name: data.name,
        denomination: data.denomination,
        language_preference,
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
        annual_budget: data.annual_budget ?  { update: data.annual_budget } : undefined,
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
      include: {
        _count: {
          select: {
            regions: true,
            churches: true,
            departments: true,
            users: true,
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
            regions: true,
            churches: true,
            departments: true,
            users: true,
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
