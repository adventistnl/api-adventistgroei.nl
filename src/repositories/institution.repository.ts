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

  async cascadeSoftDelete(id: string, userId: string): Promise<Institution> {
    const currentDate = new Date();
    
    // Primeiro, buscar a instituição para verificar se existe
    const institution = await this.findById(id);
    if (!institution) {
      throw new Error(`Institution with ID ${id} not found`);
    }

    // Usar uma transação para garantir consistência
    return await this.prisma.$transaction(async (prisma) => {
      // 1. Soft delete das churches da institution
      const churches = await prisma.church.findMany({
        where: { institution_id: id, is_deleted: false },
        select: { id: true }
      });

      if (churches.length > 0) {
        const churchIds = churches.map(c => c.id);
        
        // Soft delete das churches
        await prisma.church.updateMany({
          where: { id: { in: churchIds } },
          data: {
            is_deleted: true,
            deleted_at: currentDate,
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete dos departments das churches
        await prisma.department.updateMany({
          where: { church_id: { in: churchIds }, is_deleted: false },
          data: {
            is_deleted: true,
            deleted_at: currentDate,
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete dos users das churches
        // const churchUsers = await prisma.user.findMany({
        //   where: { church_id: { in: churchIds }, is_deleted: false },
        //   select: { id: true }
        // });

        // if (churchUsers.length > 0) {
        //   const churchUserIds = churchUsers.map(u => u.id);
          
        //   // Soft delete dos user_roles dos users das churches
        //   await prisma.userRole.updateMany({
        //     where: { user_id: { in: churchUserIds }, is_deleted: false },
        //     data: {
        //       is_deleted: true,
        //       deleted_at: currentDate,
        //       deleted_by: userId,
        //       updated_by: userId,
        //     },
        //   });
        // }

        // await prisma.user.updateMany({
        //   where: { church_id: { in: churchIds }, is_deleted: false },
        //   data: {
        //     is_deleted: true,
        //     deleted_at: currentDate,
        //     deleted_by: userId,
        //     updated_by: userId,
        //   },
        // });

        // Soft delete dos subsidy_requests das churches
        await prisma.subsidyRequest.updateMany({
          where: { church_id: { in: churchIds }, is_deleted: false },
          data: {
            is_deleted: true,
            deleted_at: currentDate,
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete dos annual_budgets das churches
        await prisma.annualBudget.updateMany({
          where: { church_id: { in: churchIds }, is_deleted: false },
          data: {
            is_deleted: true,
            deleted_at: currentDate,
            deleted_by: userId,
            updated_by: userId,
          },
        });
      }

      // 2. Soft delete dos departments da institution (não ligados a churches)
      const institutionDepartments = await prisma.department.findMany({
        where: { institution_id: id, church_id: null, is_deleted: false },
        select: { id: true }
      });

      if (institutionDepartments.length > 0) {
        const deptIds = institutionDepartments.map(d => d.id);
        
        await prisma.department.updateMany({
          where: { id: { in: deptIds } },
          data: {
            is_deleted: true,
            deleted_at: currentDate,
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete dos subsidy_statuses dos departments
        await prisma.subsidyStatus.updateMany({
          where: { department_id: { in: deptIds }, is_deleted: false },
          data: {
            is_deleted: true,
            deleted_at: currentDate,
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete dos projects dos departments
        const projects = await prisma.project.findMany({
          where: { department_id: { in: deptIds }, is_deleted: false },
          select: { id: true }
        });

        if (projects.length > 0) {
          const projectIds = projects.map(p => p.id);
          
          await prisma.project.updateMany({
            where: { id: { in: projectIds } },
            data: {
              is_deleted: true,
              deleted_at: currentDate,
              deleted_by: userId,
              updated_by: userId,
            },
          });

          // Soft delete das project activities
          const projectActivities = await prisma.projectActivity.findMany({
            where: { project_id: { in: projectIds }, is_deleted: false },
            select: { id: true }
          });

          if (projectActivities.length > 0) {
            const activityIds = projectActivities.map(pa => pa.id);
            
            await prisma.projectActivity.updateMany({
              where: { id: { in: activityIds } },
              data: {
                is_deleted: true,
                deleted_at: currentDate,
                deleted_by: userId,
                updated_by: userId,
              },
            });

            // Soft delete dos subsidy_receipts
            await prisma.subsidyReceipt.updateMany({
              where: { project_activities_id: { in: activityIds }, is_deleted: false },
              data: {
                is_deleted: true,
                deleted_at: currentDate,
                deleted_by: userId,
                updated_by: userId,
              },
            });

            // Nota: ActivityDocuments não possui campos de soft delete no schema
          }
        }

        // Soft delete dos annual_reports dos departments
        await prisma.annualReport.updateMany({
          where: { department_id: { in: deptIds }, is_deleted: false },
          data: {
            is_deleted: true,
            deleted_at: currentDate,
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete dos subsidy_requests dos departments
        await prisma.subsidyRequest.updateMany({
          where: { department_id: { in: deptIds }, is_deleted: false },
          data: {
            is_deleted: true,
            deleted_at: currentDate,
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete dos annual_budgets dos departments
        await prisma.annualBudget.updateMany({
          where: { department_id: { in: deptIds }, is_deleted: false },
          data: {
            is_deleted: true,
            deleted_at: currentDate,
            deleted_by: userId,
            updated_by: userId,
          },
        });
      }

      // // 3. Soft delete dos users da institution (não ligados a churches)
      // const institutionUsers = await prisma.user.findMany({
      //   where: { institution_id: id, church_id: null, is_deleted: false },
      //   select: { id: true }
      // });

      // if (institutionUsers.length > 0) {
      //   const userIds = institutionUsers.map(u => u.id);
        
      //   // Soft delete dos user_roles dos users
      //   await prisma.userRole.updateMany({
      //     where: { user_id: { in: userIds }, is_deleted: false },
      //     data: {
      //       is_deleted: true,
      //       deleted_at: currentDate,
      //       deleted_by: userId,
      //       updated_by: userId,
      //     },
      //   });
      // }

      // await prisma.user.updateMany({
      //   where: { institution_id: id, church_id: null, is_deleted: false },
      //   data: {
      //     is_deleted: true,
      //     deleted_at: currentDate,
      //     deleted_by: userId,
      //     updated_by: userId,
      //   },
      // });

      // 4. Soft delete das communications da institution
      await prisma.communication.updateMany({
        where: { institution_id: id, is_deleted: false },
        data: {
          is_deleted: true,
          deleted_at: currentDate,
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // 5. Soft delete das notifications da institution
      await prisma.notification.updateMany({
        where: { institution_id: id, is_deleted: false },
        data: {
          is_deleted: true,
          deleted_at: currentDate,
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // 6. Soft delete das settings da institution
      await prisma.setting.updateMany({
        where: { institution_id: id, is_deleted: false },
        data: {
          is_deleted: true,
          deleted_at: currentDate,
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // 7. Soft delete dos projects da institution
      await prisma.project.updateMany({
        where: { institution_id: id, is_deleted: false },
        data: {
          is_deleted: true,
          deleted_at: currentDate,
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // 8. Soft delete das direct_messages da institution
      await prisma.directMessage.updateMany({
        where: { institution_id: id, is_deleted: false },
        data: {
          is_deleted: true,
          deleted_at: currentDate,
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // 9. Soft delete dos subsidy_requests da institution
      await prisma.subsidyRequest.updateMany({
        where: { institution_id: id, is_deleted: false },
        data: {
          is_deleted: true,
          deleted_at: currentDate,
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // 10. Soft delete dos annual_budgets da institution
      await prisma.annualBudget.updateMany({
        where: { institution_id: id, is_deleted: false },
        data: {
          is_deleted: true,
          deleted_at: currentDate,
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // Por fim, soft delete da própria institution
      return await prisma.institution.update({
        where: { id },
        data: {
          is_deleted: true,
          deleted_at: currentDate,
          deleted_by: userId,
          updated_by: userId,
        },
      });
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
