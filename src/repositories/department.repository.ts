import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Department } from '../@generated/department/department.model';
import { DepartmentCreateDto, DepartmentUpdateDto } from 'src/dto';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { InstitutionRepository } from './institution.repository';
import { ChurchRepository } from './church.repository';
import { DepartmentKPIs, DepartmentActivityData, DepartmentBudgetTimeline } from '../dto/department-analytics.dto';

@Injectable()
export class DepartmentRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly institutionRepository: InstitutionRepository,
    private readonly churchRepository: ChurchRepository
  ) {}

  async findAll(): Promise<Department[]> {
    return this.prisma.department.findMany();
  }

  async findByInstitution(institution_id: string): Promise<Department[]> {
    return this.prisma.department.findMany({
      where: {
        institution_id,
        is_deleted: false
      }
    });
  }

  async findById(id: string): Promise<Department | null> {
    const department = await this.prisma.department.findUnique({ where: { id } });
    if (!department) {
      throw new CustomGraphQLError('Department not found', ErrorCode.NOT_FOUND, 404);
    }
    return department;
  }

  async create(data: DepartmentCreateDto, userId: string): Promise<Department> {
    await this.institutionRepository.findById(data.institution);
    const churchId = data.church && data.church.trim() !== '' ? data.church : undefined;
    if (churchId) await this.churchRepository.findById(churchId);

    let contactId: string | undefined;
    if (data.contact) {
      const contact = await this.prisma.contact.create({
        data: {
          name: data.contact.name,
          phone: data.contact.phone,
          email: data.contact.email,
          is_primary: false, // Valor padrão para is_primary
          created_by: userId,
          updated_by: userId,
        },
      });
      contactId = contact.id;
    }

    return this.prisma.department.create({
      data: {
        name: data.name,
        description: data.description,
        institution: { connect: { id: data.institution } },
        church: churchId ? { connect: { id: churchId } } : undefined,
        contact: contactId ? { connect: { id: contactId } } : undefined,
        created_by: userId,
        updated_by: userId,
      },
    });
  }

  async update(departmentId: string, data: DepartmentUpdateDto, userId: string): Promise<Department> {
    if (data.institution_id) {
      await this.institutionRepository.findById(data.institution_id);
    }

    if (data.church_id) {
      await this.churchRepository.findById(data.church_id);
    }

    const existingDepartment = await this.findById(departmentId);
    if (!existingDepartment) {
      throw new CustomGraphQLError('Department not found', ErrorCode.NOT_FOUND, 404);
    }

    let contactData;
    if (data.contact) {
      contactData = existingDepartment.contact_id
        ? {
            update: {
              ...data.contact,
              updated_by: userId,
            },
          }
        : {
            create: {
              ...data.contact,
              is_primary: false,
              created_by: userId,
              updated_by: userId,
            },
          };
    }

    return this.prisma.department.update({
      where: { id: departmentId },
      data: {
        name: data.name ?? undefined,
        description: data.description ?? undefined,
        institution: data.institution_id ? { connect: { id: data.institution_id } } : undefined,
        church: data.church_id ? { connect: { id: data.church_id } } : undefined,
        contact: contactData,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Department> {
    return await this.prisma.$transaction(async (prisma) => {
      // Verify department exists
      const department = await prisma.department.findUnique({ where: { id } });
      if (!department || department.is_deleted) {
        throw new CustomGraphQLError('Department not found', ErrorCode.NOT_FOUND, 404);
      }

      // Get all projects related to this department
      const projects = await prisma.project.findMany({
        where: { department_id: id, is_deleted: false },
        select: { id: true },
      });
      const projectIds = projects.map(p => p.id);

      // Get all project activities through projects
      let projectActivityIds: string[] = [];
      if (projectIds.length > 0) {
        const projectActivities = await prisma.projectActivity.findMany({
          where: { project_id: { in: projectIds }, is_deleted: false },
          select: { id: true },
        });
        projectActivityIds = projectActivities.map(pa => pa.id);
      }

      // Soft delete activity related data first (deepest level)
      if (projectActivityIds.length > 0) {
        // Delete subsidy receipts related to project activities
        await prisma.subsidyReceipt.updateMany({
          where: { project_activities_id: { in: projectActivityIds } },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete activity documents related to project activities
        await prisma.activityDocuments.updateMany({
          where: { project_activity_id: { in: projectActivityIds } },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete activity funding related to project activities
        await prisma.activityFunding.updateMany({
          where: { activity_id: { in: projectActivityIds } },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete project activities
        await prisma.projectActivity.updateMany({
          where: { id: { in: projectActivityIds } },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });
      }

      // Soft delete project related data
      if (projectIds.length > 0) {
        // Soft delete volunteers on projects
        await prisma.voluntariesOnProjects.updateMany({
          where: { project_id: { in: projectIds } },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete special projects
        await prisma.specialProjects.updateMany({
          where: { project_id: { in: projectIds } },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });

        // Soft delete projects
        await prisma.project.updateMany({
          where: { id: { in: projectIds } },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });
      }

      // Soft delete subsidy statuses related to this department
      await prisma.subsidyStatus.updateMany({
        where: { department_id: id, is_deleted: false },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // Soft delete subsidy requests related to this department
      await prisma.subsidyRequest.updateMany({
        where: { department_id: id, is_deleted: false },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // Soft delete annual reports related to this department
      await prisma.annualReport.updateMany({
        where: { department_id: id, is_deleted: false },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // Soft delete annual budgets related to this department
      await prisma.annualBudget.updateMany({
        where: { department_id: id, is_deleted: false },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // Remove users from this department (set department_id to null)
      await prisma.user.updateMany({
        where: { department_id: id, is_deleted: false },
        data: {
          department_id: null,
          updated_by: userId,
        },
      });

      // Soft delete the contact related to this department if exists
      if (department.contact_id) {
        await prisma.contact.update({
          where: { id: department.contact_id },
          data: {
            is_deleted: true,
            deleted_at: new Date(),
            deleted_by: userId,
            updated_by: userId,
          },
        });
      }

      // Soft delete the department itself
      const deletedDepartment = await prisma.department.update({
        where: { id },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      return deletedDepartment;
    });
  }

  async findOneByFilters(filters: Partial<Record<keyof Department, any>>): Promise<Department | null> {
    const allowedKeys: (keyof Department)[] = ['institution_id', 'name', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Department)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.department.findFirst({
      where: {
        is_deleted: false,
        ...filters,
      },
      include: { church: true },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof Department, any>>): Promise<Department[]> {
    const allowedKeys: (keyof Department)[] = ['institution_id', 'name', 'is_deleted', 'church_id'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Department)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.department.findMany({
      where: {
        is_deleted: false,
        ...filters,
      },
      include: { church: true, contact: true, users: true, annual_budgets: true },
    });
  }

  async getUsersByDepartmentId(departmentId: string): Promise<any[]> {
    return this.prisma.user.findMany({
      where: { department_id: departmentId, is_deleted: false },
      include: { user_roles: { include: { role: true } } },
    });
  }

  async getDepartmentKPIs(institution_id?: string, church_id?: string, selectedYear?: number): Promise<DepartmentKPIs> {
    const currentYear = selectedYear || new Date().getFullYear();

    // If church_id is provided: we're on church department page, get all church departments from institution
    // If only institution_id: we're on institution department page, get only institutional departments (church_id IS NULL)
    const whereClause = {
      is_deleted: false,
      ...(church_id
        ? { institution_id, church_id: { not: null } }
        : institution_id
          ? { institution_id, church_id: null }
          : {}
      ),
    };

    // Total departments
    const totalDepartments = await this.prisma.department.count({ where: whereClause });

    // Active departments (have users or budget)
    const departmentsWithData = await this.prisma.department.findMany({
      where: whereClause,
      include: {
        users: { where: { is_deleted: false } },
        annual_budgets: {
          where: {
            year: currentYear,
            is_deleted: false,
          },
        },
      },
    });

    const activeDepartments = departmentsWithData.filter(
      (dept) => dept.users.length > 0 || dept.annual_budgets.length > 0
    ).length;

    const departmentsWithBudget = departmentsWithData.filter(
      (dept) => dept.annual_budgets.length > 0 && Number(dept.annual_budgets[0]?.allocated_amount || 0) > 0
    ).length;

    // Total users
    const totalUsers = await this.prisma.user.count({
      where: {
        is_deleted: false,
        department_id: { not: null },
        ...(institution_id && {
          department: {
            institution_id,
          },
        }),
      },
    });

    // Budget calculations
    const budgetData = await this.prisma.annualBudget.aggregate({
      where: {
        year: currentYear,
        is_deleted: false,
        department: whereClause,
      },
      _sum: {
        allocated_amount: true,
        total_expenses: true,
      },
    });

    const totalAllocatedBudget = Number(budgetData._sum.allocated_amount || 0);
    const totalSpentBudget = Number(budgetData._sum.total_expenses || 0);
    const averageBudgetPerDepartment = departmentsWithBudget > 0 ? totalAllocatedBudget / departmentsWithBudget : 0;
    const averageUsersPerDepartment = totalDepartments > 0 ? totalUsers / totalDepartments : 0;

    // Projects calculations
    const projects = await this.prisma.project.findMany({
      where: {
        is_deleted: false,
        department: whereClause,
      },
      include: {
        activities: {
          where: { is_deleted: false },
          select: { status: true },
        },
      },
    });

    const totalProjects = projects.length;

    // Projeto concluído: todas as atividades estão concluídas (COMPLETED)
    const completedProjects = projects.filter((project) => {
      if (project.activities.length === 0) return false;
      return project.activities.every((activity) => activity.status === 'COMPLETED');
    }).length;

    // Projeto aberto: tem pelo menos uma atividade não concluída
    const openProjects = projects.filter((project) => {
      if (project.activities.length === 0) return true; // Projeto sem atividades é considerado aberto
      return project.activities.some((activity) => activity.status !== 'COMPLETED');
    }).length;

    return {
      totalDepartments,
      activeDepartments,
      departmentsWithBudget,
      totalUsers,
      totalAllocatedBudget,
      totalSpentBudget,
      averageBudgetPerDepartment,
      averageUsersPerDepartment,
      totalProjects,
      openProjects,
      completedProjects,
    };
  }

  async getDepartmentActivityData(institution_id?: string, church_id?: string, selectedYear?: number): Promise<DepartmentActivityData[]> {
    const currentYear = selectedYear || new Date().getFullYear();

    // If church_id is provided: we're on church department page, get all church departments from institution
    // If only institution_id: we're on institution department page, get only institutional departments (church_id IS NULL)
    const whereClause = {
      is_deleted: false,
      ...(church_id
        ? { institution_id, church_id: { not: null } }
        : institution_id
          ? { institution_id, church_id: null }
          : {}
      ),
    };

    const departments = await this.prisma.department.findMany({
      where: whereClause,
      include: {
        users: { where: { is_deleted: false } },
        annual_budgets: {
          where: {
            year: currentYear,
            is_deleted: false,
          },
        },
        projects: {
          where: { is_deleted: false },
          include: {
            activities: { where: { is_deleted: false } },
          },
        },
      },
    });

    return departments.map((dept) => {
      const yearBudget = dept.annual_budgets[0];
      const allocated_amount = Number(yearBudget?.allocated_amount) || 0;
      const spent_amount = Number(yearBudget?.total_expenses) || 0;
      const user_count = dept.users.length;
      const project_count = dept.projects.length;
      const activity_count = dept.projects.reduce((sum, project) => sum + project.activities.length, 0);

      // Calculate open and completed projects for this department
      const completed_projects = dept.projects.filter((project) => {
        if (project.activities.length === 0) return false;
        return project.activities.every((activity) => activity.status === 'COMPLETED');
      }).length;

      const open_projects = dept.projects.filter((project) => {
        if (project.activities.length === 0) return true;
        return project.activities.some((activity) => activity.status !== 'COMPLETED');
      }).length;

      return {
        department_id: dept.id,
        department_name: dept.name,
        user_count,
        allocated_amount,
        spent_amount,
        project_count,
        open_projects,
        completed_projects,
        activity_count,
      };
    });
  }

  async getDepartmentBudgetTimeline(institution_id?: string, church_id?: string, selectedYear?: number): Promise<DepartmentBudgetTimeline[]> {
    const currentYear = selectedYear || new Date().getFullYear();

    // If church_id is provided: we're on church department page, get all church departments from institution
    // If only institution_id: we're on institution department page, get only institutional departments (church_id IS NULL)
    const whereClause = {
      is_deleted: false,
      ...(church_id
        ? { institution_id, church_id: { not: null } }
        : institution_id
          ? { institution_id, church_id: null }
          : {}
      ),
    };

    const departments = await this.prisma.department.findMany({
      where: whereClause,
      include: {
        annual_budgets: {
          where: {
            year: currentYear,
            is_deleted: false,
          },
        },
      },
    });

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = new Date().getMonth();
    const timeline: DepartmentBudgetTimeline[] = [];

    departments.forEach((dept) => {
      const yearBudget = dept.annual_budgets[0];
      const allocated = Number(yearBudget?.allocated_amount) || 0;
      const totalSpent = Number(yearBudget?.total_expenses) || 0;

      months.forEach((month, index) => {
        // Only show data up to current month
        if (index <= currentMonth) {
          const monthlyProgress = (index + 1) / 12;
          const spent = totalSpent * monthlyProgress;

          timeline.push({
            month,
            department_id: dept.id,
            department_name: dept.name,
            allocated,
            spent,
          });
        }
      });
    });

    return timeline;
  }
}
