import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ChurchCreateDto, ChurchUpdateDto } from '../dto/church.dto';
import { Church } from '@prisma/client';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { InstitutionRepository } from './institution.repository';
import { RegionRepository } from './region.repository';

@Injectable()
export class ChurchRepository {
  constructor(private readonly prisma: PrismaService,
    private readonly institutionRepository: InstitutionRepository,
    private readonly regionRepository: RegionRepository
  ) {}

  async create(data: ChurchCreateDto, userId: string): Promise<Church> {
    // Validação de relacionamentos
    await this.validateInstitution(data.institution_id);

    let contactId: string | undefined = undefined;
    let regionId: string | undefined = undefined;

    // Cria contato e obtém cidade
    let city: string | undefined = undefined;
    if (data.contact) {
      city = data.contact.city;
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

    // Busca região pela cidade
    if (city) {
      const region = await this.regionRepository.findRegionByCity(city);
      if (region) {
        regionId = region.id;
      }
    }

    return await this.prisma.church.create({
      data: {
        institution: { connect: { id: data.institution_id } },
        region: regionId ? { connect: { id: regionId } } : undefined,
        name: data.name,
        type: data.type || 'STANDARD',
        contact:  contactId ? { connect: { id: contactId } } : undefined,
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });
  }

  async update(churchId: string, data: ChurchUpdateDto, userId: string): Promise<Church> {
    await this.findById(churchId);
    if (data.institution_id) {
      await this.institutionRepository.findById(data.institution_id);
    }

    // Check if contact exists before trying to update
    let contactData = {};
    let regionId: string | undefined = undefined;
    let city: string | undefined = undefined;
    if (data.contact) {
      city = data.contact.city;
      const church = await this.prisma.church.findUnique({
        where: { id: churchId },
        select: { contact_id: true },
      });

      // Filter out undefined and null values from contact data
      const cleanContactData = Object.fromEntries(
        Object.entries(data.contact).filter(([_, v]) => v !== undefined && v !== null)
      );

      if (church?.contact_id) {
        // Contact exists, update it
        contactData = { contact: { update: { ...cleanContactData, updated_by: userId } } };
      } else {
        // Contact doesn't exist, create it com is_primary default true
        contactData = { contact: { create: { ...cleanContactData, is_primary: true, created_by: userId, updated_by: userId } } };
      }
    }

    // Busca região pela cidade
    if (city) {
      const region = await this.regionRepository.findRegionByCity(city);
      if (region) {
        regionId = region.id;
      }
      // Se não há região para a cidade, regionId permanece undefined
      // e será desconectada no update abaixo
    }

    return await this.prisma.church.update({
      where: { id: churchId },
      data: {
        ...(data.institution_id && { institution: { connect: { id: data.institution_id } } }),
        ...(data.type && { type: data.type }),
        ...(data.name && { name: data.name }),
        // Sempre atualiza a região quando a cidade for informada
        // Conecta se há regionId, ou desconecta (null) se não há região para a cidade
        ...(city !== undefined && {
          region: regionId ? { connect: { id: regionId } } : { disconnect: true }
        }),
        ...contactData,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Church> {
    // Perform a transaction to ensure data consistency
    return await this.prisma.$transaction(async (prisma) => {
      // Verify church exists
      const church = await prisma.church.findUnique({ where: { id } });
      if (!church || church.is_deleted) {
        throw new CustomGraphQLError('Church not found', ErrorCode.NOT_FOUND, 404);
      }

      // Get all departments related to this church
      const departments = await prisma.department.findMany({
        where: { church_id: id, is_deleted: false },
        select: { id: true, contact_id: true },
      });
      const departmentIds = departments.map(d => d.id);

      // Get all users related to this church (to delete their contacts and roles)
      const users = await prisma.user.findMany({
        where: { church_id: id, is_deleted: false },
        select: { id: true, contact_id: true },
      });
      const userIds = users.map(u => u.id);

      // Soft delete all projects related to departments in this church
      if (departmentIds.length > 0) {
        await prisma.project.updateMany({
          where: { department_id: { in: departmentIds } },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete all subsidy statuses related to departments in this church
        await prisma.subsidyStatus.updateMany({
          where: { department_id: { in: departmentIds } },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete all annual reports related to departments in this church
        await prisma.annualReport.updateMany({
          where: { department_id: { in: departmentIds } },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete all special projects related to departments in this church
        await prisma.specialProjects.updateMany({
          where: { department_id: { in: departmentIds } },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete all contacts related to departments in this church
        const departmentContacts = departments.filter(d => d.contact_id && d.contact_id !== null).map(d => d.contact_id as string);
        if (departmentContacts.length > 0) {
          await prisma.contact.updateMany({
            where: { id: { in: departmentContacts } },
            data: {
              is_deleted: true,
              deleted_at: new Date(),
              deleted_by: userId,
              updated_by: userId,
            },
          });
        }
      }

      // Soft delete all departments related to this church
      await prisma.department.updateMany({
        where: { church_id: id },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // Soft delete all UserRoles related to users in this church
      if (userIds.length > 0) {
        await prisma.userRole.deleteMany({
          where: { user_id: { in: userIds } },
        });

        // Soft delete all contacts related to users in this church
        const userContacts = users.filter(u => u.contact_id && u.contact_id !== null).map(u => u.contact_id as string);
        if (userContacts.length > 0) {
          await prisma.contact.updateMany({
            where: { id: { in: userContacts } },
            data: {
              is_deleted: true,
              deleted_at: new Date(),
              deleted_by: userId,
              updated_by: userId,
            },
          });
        }
      }

      // Soft delete all users related to this church
      await prisma.user.updateMany({
        where: { church_id: id },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // Soft delete all annual budgets related to this church
      await prisma.annualBudget.updateMany({
        where: { church_id: id },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // Soft delete all subsidy requests related to this church
      await prisma.subsidyRequest.updateMany({
        where: { church_id: id },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // Soft delete the contact related to this church
      if (church.contact_id) {
        await prisma.contact.update({
          where: { id: church.contact_id },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });
      }

      // Soft delete the church itself
      const deletedChurch = await prisma.church.update({
        where: { id },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      return deletedChurch;
    });
  }

  async findAll(): Promise<Church[]> {
    return await this.prisma.church.findMany({ where: { is_deleted: false } });
  }

  async findById(id: string): Promise<Church | null> {
    const church = await this.prisma.church.findUnique({
      where: { id },
    });

    if (!church || church.is_deleted) {
      throw new CustomGraphQLError('Church not found', ErrorCode.NOT_FOUND, 404);
    }

    return church;
  }

  // Método para buscar uma igreja sem lançar erro - usado em resolvers de relacionamento
  async findByIdSafe(id: string): Promise<Church | null> {
    const church = await this.prisma.church.findUnique({
      where: { id },
    });

    // Retorna null se a igreja não existe ou foi deletada, sem lançar erro
    if (!church || church.is_deleted) {
      return null;
    }

    return church;
  }

  async findOneByFilters(filters: Partial<Record<keyof Church, any>>): Promise<Church | null> {
    const allowedKeys: (keyof Church)[] = ['institution_id', 'region_id', 'name', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Church)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.church.findFirst({
      where: {
        is_deleted: false,
        ...filters,
      },
    });
  }

  async findManyByFilters(
    filters: Partial<Record<keyof Church, any>>, 
    includeDeleted: boolean = false,
    options?: any
  ): Promise<Church[]> {
    const allowedKeys: (keyof Church)[] = ['institution_id', 'region_id', 'name', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Church)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    const defaultInclude = {
      annual_budgets: true,
      contact: true,
      region: true,
      users: true,
      departments: {
        include: {
          annual_budgets: true,
          contact: true,
          church: true,
          users: true,
          projects: true,
        },
      },
    };

    return this.prisma.church.findMany({
      where: {
        ...filters,
      },
      include: options?.include || defaultInclude,
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async validateInstitution(institutionId: string): Promise<void> {
    const institution = await this.prisma.institution.findUnique({ where: { id: institutionId } });
    if (!institution) {
      throw new CustomGraphQLError('Institution not found', ErrorCode.NOT_FOUND, 404);
    }
  }

  async validateRegion(regionId: string): Promise<void> {
    const region = await this.prisma.region.findUnique({ where: { id: regionId } });
    if (!region) {
      throw new CustomGraphQLError('Region not found', ErrorCode.NOT_FOUND, 404);
    }
  }

  async getKPIData(churchId: string): Promise<{ totalMembers: number; totalDepartments: number; totalSubsidyRequests: number; totalBudget: number; totalUsedBudget: number; budgetUtilization: number }> {
    // Check if church exists and is not deleted
    const church = await this.prisma.church.findUnique({
      where: { id: churchId },
    });

    if (!church || church.is_deleted) {
      // Return empty KPI data for deleted or non-existent churches
      return {
        totalMembers: 0,
        totalDepartments: 0,
        totalSubsidyRequests: 0,
        totalBudget: 0,
        totalUsedBudget: 0,
        budgetUtilization: 0,
      };
    }

    const totalMembers = await this.prisma.user.count({
      where: { church_id: churchId, is_deleted: false },
    });

    const totalDepartments = await this.prisma.department.count({
      where: { church_id: churchId, is_deleted: false },
    });

    const totalSubsidyRequests = await this.prisma.subsidyRequest.count({
      where: { church_id: churchId, is_deleted: false },
    });

    const budgets = await this.prisma.annualBudget.aggregate({
      where: { church_id: churchId, is_deleted: false },
      _sum: {
        planned_budget: true,
        total_expenses: true,
      },
    });

    const totalBudget = budgets._sum.planned_budget?.toNumber() || 0;
    const totalUsedBudget = budgets._sum.total_expenses?.toNumber() || 0;
    const budgetUtilization = totalBudget > 0 ? (totalUsedBudget / totalBudget) * 100 : 0;

    return {
      totalMembers,
      totalDepartments,
      totalSubsidyRequests,
      totalBudget,
      totalUsedBudget,
      budgetUtilization,
    };
  }

  async getUsersByChurchId(churchId: string): Promise<any[]> {
    return this.prisma.user.findMany({
      where: { church_id: churchId, is_deleted: false },
      include: { user_roles: { include: { role: true } } },
    });
  }
}
