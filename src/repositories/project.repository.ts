import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Project } from '../@generated/project/project.model';
import { ProjectCreateDto, ProjectUpdateDto } from '../dto/project.dto';
import { Decimal } from '@prisma/client/runtime/library';
import { InstitutionRepository } from './institution.repository';
import { DepartmentRepository } from './department.repository';
import { UserRepository } from './user.repository';
import { EntityType } from '../@generated/prisma/entity-type.enum';
import { ProjectActivityLogRepository } from './project-activity-log.repository';
import { ProjectActivityLogAction } from '../@generated/prisma/project-activity-log-action.enum';

@Injectable()
export class ProjectRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly institutionRepository: InstitutionRepository,
    private readonly departmentRepository: DepartmentRepository,
    private readonly userRepository: UserRepository,
    private readonly activityLogRepository: ProjectActivityLogRepository


  ) {}

  async create(data: ProjectCreateDto, userId: string): Promise<Project> {
    // Validações condicionais
    if (data.institution_id) {
      await this.institutionRepository.findById(data.institution_id);
    }
    await this.departmentRepository.findById(data.department_id);

    const ownerId = data.owner_id || userId;
    await this.userRepository.findById(ownerId);

    // Criar evento se is_event = true e dados do evento foram fornecidos
    let eventId: string | undefined;
    if (data.is_event && data.event) {
      // Criar um contato básico para o evento (pode ser melhorado depois)
      const eventContact = await this.prisma.contact.create({
        data: {
          name: data.event.title,
          address: data.event.location,
          is_primary: false,
          created_by: userId,
          updated_by: userId,
        },
      });

      const createdEvent = await this.prisma.event.create({
        data: {
          title: data.event.title,
          description: data.event.description,
          type: data.event.type,
          max_participants: data.event.max_participants,
          ticket_amount: new Decimal(data.event.ticket_amount),
          location: data.event.location,
          subscription_expires_at: new Date(data.event.subscription_expires_at),
          language_preference: data.language_preference,
          is_private: data.is_private,
          required_volunteers: data.required_volunteers,
          start_at: new Date(data.start_at),
          end_at: new Date(data.end_at),
          contact_id: eventContact.id,
          target_type: 'institution',
          target_id: data.institution_id || '',
          created_by: userId,
          updated_by: userId,
        },
      });

      eventId = createdEvent.id;
    }

    const createdProject = await this.prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        language_preference: data.language_preference,
        budget: new Decimal(data.budget),
        type: data.type,
        is_private: data.is_private,
        required_volunteers: data.required_volunteers,
        start_at: new Date(data.start_at),
        end_at: new Date(data.end_at),
        deadline: data.deadline ? new Date(data.deadline) : undefined,
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
        department: { connect: { id: data.department_id } },
        owner: { connect: { id: ownerId } },
        Institution: data.institution_id ? { connect: { id: data.institution_id } } : undefined,
        event: eventId ? { connect: { id: eventId } } : undefined,
      },
    });

    if (data.activities && data.activities.length > 0) {
      for (const activity of data.activities) {
        // Ensure current user is in assignee_ids if not already present
        let assigneeIds = activity.assignee_ids || [];
        if (!assigneeIds.includes(userId)) {
          assigneeIds = [userId, ...assigneeIds];
        }

        const createdActivity = await this.prisma.projectActivity.create({
          data: {
            project: { connect: { id: createdProject.id } },
            name: activity.name,
            description: activity.description,
            budget_amount: new Decimal(activity.budget_amount),
            deadline: new Date(activity.deadline),
            tags: activity.tags,
            created_by: userId,
            updated_by: userId,
            // Create assignees (current user + any additional assignees)
            assignees: {
              create: assigneeIds.map(assigneeId => ({
                user_id: assigneeId,
                created_by: userId,
              })),
            },

          },
        });

        // Log creation
        await this.activityLogRepository.create({
          activity_id: createdActivity.id,
          user_id: userId,
          action: ProjectActivityLogAction.CREATED,
          metadata: { name: createdActivity.name }
        });

        if (activity.activity_funding) {
          await this.prisma.activityFunding.create({
            data: {
              activity_id: createdActivity.id,
              entity_contribution_amount: new Decimal(activity.activity_funding.entity_contribution_amount),
              entity_contribution_percent: activity.activity_funding.entity_contribution_percent,
              entity_type: activity.activity_funding.entity_type,
              entity_id: activity.activity_funding.entity_id,
            },
          });
        }
      }
    }

    // Create SpecialProject if is_special_case = true
    if (data.is_special_case) {
      // Get or create a default subsidy status for special projects
      let subsidyStatus = await this.prisma.subsidyStatus.findFirst({
        where: {
          name: 'Pending',
          department_id: data.department_id,
          is_deleted: false
        }
      });

      if (!subsidyStatus) {
        subsidyStatus = await this.prisma.subsidyStatus.create({
          data: {
            name: 'Pending',
            description: 'Pending approval for special project',
            order: 1,
            department_id: data.department_id,
            assigned_to: ownerId,
            created_by: userId,
            updated_by: userId,
          }
        });
      }

      await this.prisma.specialProjects.create({
        data: {
          department_id: data.department_id,
          institution_id: data.institution_id,
          project_id: createdProject.id,
          justification_note: data.special_case_reason,
          budget: data.special_budget ? new Decimal(data.special_budget) : null,
          subsidy_status_id: subsidyStatus.id,
          type: data.location_church_plant ? 'CHURCH_PLANTING' : 'SPECIAL',
          location_church_plant: data.location_church_plant,
          created_by: userId,
          updated_by: userId,
        }
      });
    }

    return createdProject;
  }
  
  async update(id: string, data: ProjectUpdateDto, userId: string): Promise<Project> {
    const { institution_id, department_id, owner_id, activities, ...rest } = data;

    if (institution_id) {
      await this.institutionRepository.findById(institution_id);
    }
    if (department_id) {
      await this.departmentRepository.findById(department_id);
    }
    if (owner_id) {
      await this.userRepository.findById(owner_id);
    }

    const updateData: any = {
      Institution: institution_id ? { connect: { id: institution_id } } : undefined,
      owner: owner_id ? { connect: { id: owner_id } } : undefined,
      department: department_id ? { connect: { id: department_id } } : undefined,
      budget: rest.budget ? new Decimal(rest.budget) : undefined,
      title: rest.title,
      description: rest.description,
      language_preference: rest.language_preference,
      type: rest.type,
      is_private: rest.is_private,
      required_volunteers: rest.required_volunteers,
      start_at: rest.start_at ? new Date(rest.start_at) : undefined,
      end_at: rest.end_at ? new Date(rest.end_at) : undefined,
      deadline: rest.deadline ? new Date(rest.deadline) : undefined,
      updated_by: userId,
    };

    if (activities) {
      for (const activity of activities) {
        if (activity.id) {
          const updateActivityData: Record<string, any> = {
            name: activity.name,
            description: activity.description,
            budget_amount: activity.budget_amount ? new Decimal(activity.budget_amount) : undefined,
            deadline: activity.deadline ? new Date(activity.deadline) : undefined,
            tags: activity.tags,
            updated_by: userId,
          };

          if (activity.activity_funding && typeof activity.activity_funding === 'object') {
            updateActivityData.activity_funding = {
              update: {
                entity_contribution_amount: activity.activity_funding.entity_contribution_amount
                  ? new Decimal(activity.activity_funding.entity_contribution_amount)
                  : undefined,
                entity_contribution_percent: activity.activity_funding.entity_contribution_percent,
                entity_type: activity.activity_funding.entity_type,
                entity_id: activity.activity_funding.entity_id,
              },
            };
          }

          await this.prisma.projectActivity.update({
            where: { id: activity.id },
            data: updateActivityData,
          });
           await this.activityLogRepository.create({
              activity_id: activity.id,
              user_id: userId,
              action: ProjectActivityLogAction.UPDATED,
           });
        } else {
          // Criar nova atividade
          const createdActivity = await this.prisma.projectActivity.create({
            data: {
              project: { connect: { id } },
              name: activity.name || '', // Garantir que seja uma string válida
              description: activity.description || '', // Garantir que seja uma string válida
              budget_amount: activity.budget_amount ? new Decimal(activity.budget_amount) : new Decimal(0), // Valor padrão
              deadline: activity.deadline ? new Date(activity.deadline) : new Date(), // Valor padrão
              tags: activity.tags,
              created_by: userId,
              updated_by: userId,
              activity_funding: activity.activity_funding
                ? {
                    create: {
                      entity_contribution_amount: activity.activity_funding.entity_contribution_amount
                        ? new Decimal(activity.activity_funding.entity_contribution_amount)
                        : new Decimal(0), // Valor padrão
                      entity_contribution_percent: activity.activity_funding.entity_contribution_percent || 0, // Valor padrão
                      entity_type: activity.activity_funding.entity_type || EntityType.USER, // Ajuste para valor válido
                      entity_id: activity.activity_funding.entity_id || '', // Garantir string válida
                    },
                  }
                : undefined,
            },
          });

          // Log creation
          await this.activityLogRepository.create({
             activity_id: createdActivity.id,
             user_id: userId,
             action: ProjectActivityLogAction.CREATED,
             metadata: { name: createdActivity.name }
          });
        }
      }
    }

    return this.prisma.project.update({
      where: { id },
      data: updateData,
    });
  }

  async softDelete(id: string, userId: string): Promise<Project> {
    return this.prisma.project.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findById(id: string): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { id, is_deleted: false },
      include: {
        owner: true, // Inclui o relacionamento com o proprietário
        department: true,
        Institution: true,
        activities: {
          where: {
            is_deleted: false,
          },
          include: {
            assignees: {
              include: {
                user: true, // Inclui os dados do usuário responsável
              },
            },
            activity_funding: true,
          },
        },
        subsidies: {
          where: {
            is_deleted: false,
            requester: {
              is_deleted: false,
            },
          },
          include: {
            subsidy_status: true,
            institution: true,
            requester: true,
            department: true,
            church: true,
          },
        },
        special_projects: {
          where: { is_deleted: false },
        },
      },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof Project, any>>): Promise<Project[]> {
    const allowedKeys: (keyof Project)[] = ['institution_id', 'title', 'description', 'is_deleted', 'type'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Project)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.project.findMany({
      where: {
        ...filters,
        is_deleted: false,
      },
      include: {
        owner: true, // Inclui o relacionamento com o proprietário
        department: true,
        Institution: true,
        activities: {
          where: {
            is_deleted: false,
          },
          include: {
            assignees: {
              include: {
                user: true,
              },
            },
            activity_funding: true,
          },
        },
      },
    });
  }

  async findOneByFilters(filters: Partial<Record<keyof Project, any>>): Promise<Project | null> {
    const allowedKeys: (keyof Project)[] = ['institution_id', 'title', 'description', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Project)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.project.findFirst({
      where: {
        ...filters,
        is_deleted: false,
      },
      include: {
        owner: true, // Inclui o relacionamento com o proprietário
        department: true,
        Institution: true,
        activities: {
          where: {
            is_deleted: false,
          },
          include: {
            assignees: {
              include: {
                user: true,
              },
            },
            activity_funding: true,
          },
        },
      },
    });
  }

  async findAll(institutionId?: string): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          OR: [
            { institution_id: institutionId },
            {
              department: {
                institution_id: institutionId,
              },
            },
          ],
        }),
      },
      include: {
        owner: true, // Inclui o relacionamento com o proprietário
        department: true,
        Institution: true,
        activities: {
          where: {
            is_deleted: false,
          },
          include: {
            assignees: {
              include: {
                user: true, // Inclui os dados dos usuários responsáveis
              },
            },
            activity_funding: true,
          },
        },
      },
    });
  }

  async findByChurchId(churchId: string): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: {
        department: {
          church_id: churchId,
        },
        is_deleted: false,
      },
      include: {
        owner: true,
        department: true,
        Institution: true,
        activities: {
          where: {
            is_deleted: false,
          },
          include: {
            assignees: {
              include: {
                user: true, // Inclui os dados dos usuários responsáveis
              },
            },
            activity_funding: true,
          },
        },
      },
    });
  }
}
