import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { SubsidyRequest } from '../@generated/subsidy-request/subsidy-request.model';
import { SubsidyRequestCreateDto, SubsidyRequestUpdateDto } from '../dto/subsidy-request.dto';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { ProjectActivityRepository } from './project-activity.repository';
import { SubsidyRequestItemRepository } from './subsidy-request-item.repository';

@Injectable()
export class SubsidyRequestRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projectActivityRespository: ProjectActivityRepository,
    private readonly subsidyRequestItemRepository: SubsidyRequestItemRepository,
  ) {}

  async create(data: SubsidyRequestCreateDto, userId: string): Promise<SubsidyRequest> {
    const { institution_id, requester_id, department_id, church_id, items, subsidy_status_id, project_id, notes, ...rest } = data;

    if (!items || items.length === 0) {
      throw new CustomGraphQLError('At least one item must be associated with the SubsidyRequest.', ErrorCode.BAD_REQUEST, 400);
    }

    const subsidyStatus = await this.prisma.subsidyStatus.findFirst({
      where: { id: subsidy_status_id, is_deleted: false },
    });

    if (!subsidyStatus) {
      throw new CustomGraphQLError(`SubsidyStatus with id ${subsidy_status_id} does not exist or has been deleted.`, ErrorCode.NOT_FOUND, 404);
    }

    // Validar que todas as activities existem
    const activityIds = items.map(item => item.project_activity_id);
    const projectActivities = await this.projectActivityRespository.findManyByFilters({
      id: { in: activityIds },
      is_deleted: false,
    });

    if (projectActivities.length !== activityIds.length) {
      throw new CustomGraphQLError(`One or more ProjectActivities do not exist or have been deleted.`, ErrorCode.NOT_FOUND, 404);
    }

    // Check for duplicate subsidy requests
    const existingSubsidies = await this.prisma.subsidyRequest.findMany({
      where: {
        is_deleted: false,
        items: {
          some: {
            project_activity_id: { in: activityIds },
            is_deleted: false
          }
        }
      },
      include: {
        items: {
          where: {
            project_activity_id: { in: activityIds },
            is_deleted: false
          },
          include: {
            project_activity: true
          }
        }
      }
    });

    if (existingSubsidies.length > 0) {
      const duplicateActivities = existingSubsidies
        .flatMap(s => s.items)
        .map(item => item.project_activity.name);
      
      throw new CustomGraphQLError(
        `As seguintes atividades já possuem pedido de subsídio: ${duplicateActivities.join(', ')}`,
        ErrorCode.BAD_REQUEST,
        400
      );
    }


    console.log('🔍 [SubsidyRequestRepository] Creating subsidy with:', {
      institution_id,
      department_id,
      church_id,
      project_id,
      requester_id
    });

    // Criar SubsidyRequest
    const subsidyRequest = await this.prisma.subsidyRequest.create({
      data: {
        ...rest,
        project: { connect: { id: project_id } },
        institution: { connect: { id: institution_id } },
        requester: { connect: { id: requester_id } },
        department: { connect: { id: department_id } },
        // Conectar church apenas se church_id existir
        ...(church_id ? { church: { connect: { id: church_id } } } : {}),
        subsidy_status: { connect: { id: subsidy_status_id } },
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });

    // Criar items
    await this.subsidyRequestItemRepository.createMany(subsidyRequest.id, items);

    // Retornar com relacionamentos
    const result = await this.findById(subsidyRequest.id);
    if (!result) {
      throw new CustomGraphQLError('Failed to retrieve created SubsidyRequest', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
    return result;
  }

  async update(id: string, data: SubsidyRequestUpdateDto, userId: string): Promise<SubsidyRequest> {
    const {
      items,
      institution_id,
      department_id,
      church_id,
      subsidy_status_id,
      requester_id,
      notes, // notes is in DTO but not in Prisma model - extract to avoid error
      ...updateData
    } = data;

    // Atualizar SubsidyRequest
    await this.prisma.subsidyRequest.update({
      where: { id },
      data: {
        ...updateData,
        updated_by: userId,
        // Use Prisma connect syntax for relations
        ...(institution_id && { institution: { connect: { id: institution_id } } }),
        ...(department_id && { department: { connect: { id: department_id } } }),
        ...(church_id && { church: { connect: { id: church_id } } }),
        ...(subsidy_status_id && { subsidy_status: { connect: { id: subsidy_status_id } } }),
        ...(requester_id && { requester: { connect: { id: requester_id } } }),
      },
    });

    // Se items foram fornecidos, atualizar
    if (items) {
      await this.subsidyRequestItemRepository.deleteBySubsidyRequestId(id);
      await this.subsidyRequestItemRepository.createMany(id, items);
    }

    const result = await this.findById(id);
    if (!result) {
      throw new CustomGraphQLError('Failed to retrieve updated SubsidyRequest', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
    return result;
  }

  async softDelete(id: string, userId: string): Promise<SubsidyRequest> {
    return this.prisma.subsidyRequest.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
      include: {
        subsidy_status: true,
        institution: true,
        requester: true,
        department: {
          include: {
            church: true,
          },
        },
        church: true,
        project: true,
      },
    });
  }

  async findById(id: string): Promise<SubsidyRequest | null> {
    // Usar findFirst com filtro de requester válido ao invés de findUnique
    return this.prisma.subsidyRequest.findFirst({
      where: {
        id,
        is_deleted: false,
        // Garantir que apenas subsídios com requester válido sejam retornados
        requester: {
          is_deleted: false,
        },
      },
      include: {
        institution: true,
        requester: true,
        department: {
          include: {
            church: true, // Include church from department for CHURCH_DEPARTMENT types
          },
        },
        church: true,
        subsidy_status: true,
        project: {
          include: {
            owner: true,
            department: true,
          },
        },
        items: {
          where: { is_deleted: false },
          include: {
            project_activity: {
              include: {
                activity_documents: true,
                assignees: {
                  include: {
                    user: true,
                  },
                },
                activity_funding: true,
              },
            },
          },
        },
        subsidy_receipts: true,
      },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof SubsidyRequest, any>>): Promise<SubsidyRequest[]> {
    const allowedKeys: (keyof SubsidyRequest)[] = ['institution_id', 'description', 'is_deleted', 'total_budget', 'project_id'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof SubsidyRequest)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.subsidyRequest.findMany({
      where: {
        ...filters,
        is_deleted: false,
        // Garantir que apenas subsídios com requester válido sejam retornados
        requester: {
          is_deleted: false,
        },
      },
      include: {
        institution: true,
        requester: true,
        department: {
          include: {
            church: true, // Include church from department for CHURCH_DEPARTMENT types
          },
        },
        church: true,
        subsidy_status: true,
        project: {
          include: {
            owner: true,
            department: true,
          },
        },
        items: {
          where: { is_deleted: false },
          include: {
            project_activity: {
              include: {
                activity_documents: true,
              },
            },
          },
        },
        subsidy_receipts: true,
      },
    });
  }

  async findOneByFilters(filters: Partial<Record<keyof SubsidyRequest, any>>): Promise<SubsidyRequest | null> {
    const allowedKeys: (keyof SubsidyRequest)[] = ['institution_id', 'description', 'is_deleted', 'total_budget'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof SubsidyRequest)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.subsidyRequest.findFirst({
      where: {
        ...filters,
        is_deleted: false,
        // Garantir que apenas subsídios com requester válido sejam retornados
        requester: {
          is_deleted: false,
        },
      },
      include: {
        institution: true,
        requester: true,
        department: {
          include: {
            church: true, // Include church from department for CHURCH_DEPARTMENT types
          },
        },
        church: true,
        subsidy_status: true,
      },
    });
  }

  async findAll(): Promise<SubsidyRequest[]> {
    return this.prisma.subsidyRequest.findMany({
      where: {
        is_deleted: false,
        // Garantir que apenas subsídios com requester válido sejam retornados
        requester: {
          is_deleted: false,
        },
      },
      include: {
        institution: true,
        requester: true,
        department: {
          include: {
            church: true, // Include church from department for CHURCH_DEPARTMENT types
          },
        },
        church: true,
        project: {
          include: {
            owner: true,
            department: true,
          },
        },
        subsidy_status: true,
        items: {
          where: { is_deleted: false },
          include: {
            project_activity: {
              include: {
                activity_documents: true,
              },
            },
          },
        },
        subsidy_receipts: true,
      },
    });
  }
}
