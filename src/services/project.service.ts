import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../repositories/project.repository';
import { DecimalHelper } from '../common/helpers/decimal.helper';
import { Project } from '../@generated/project/project.model';
import { ProjectCreateDto, ProjectUpdateDto, ProjectUpdateCoOwnerDto } from '../dto/project.dto';
import { PrismaService } from './prisma.service';
import { ProjectKPIs, ProjectsByDepartment, SubsidyStatusDistribution, ProjectsTimeline } from '../dto/project-analytics.dto';
import { SubsidyRequestService } from './subsidy-request.service';
import { ProjectActivityService } from './project-activity.service';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { AnnualBudgetService } from './annual-budget.service';
import { UserRepository } from '../repositories/user.repository';
import { UserWithRoles, ProjectCollaborator } from '../models';
import { ProjectStatus } from '../@generated/prisma/project-status.enum';
import { EmailService } from './email.service';
import { NotificationService } from './notification.service';

@Injectable()
export class ProjectService {
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly prisma: PrismaService,
    private readonly subsidyRequestService: SubsidyRequestService,
    private readonly projectActivityService: ProjectActivityService,
    private readonly annualBudgetService: AnnualBudgetService,
    private readonly userRepository: UserRepository,
    private readonly emailService: EmailService,
    private readonly notificationService: NotificationService,
  ) {}

  async create(data: ProjectCreateDto, userId: string): Promise<Project> {
    // Validate: department must have a leader assigned
    if (data.department_id) {
      const department = await this.prisma.department.findUnique({
        where: { id: data.department_id },
        select: { leader_id: true, name: true },
      });

      if (!department?.leader_id) {
        throw new CustomGraphQLError(
          `Department "${department?.name ?? data.department_id}" has no leader assigned. Please assign a leader to the department before creating a project.`,
          ErrorCode.BAD_REQUEST,
          400,
          { additional: { errorCode: 'DEPARTMENT_HAS_NO_LEADER' } }
        );
      }

      // Owner = Department Leader
      data.owner_id = department.leader_id;
    }

    // Validate: church must have a leader assigned
    if (data.church_id) {
      const church = await this.prisma.church.findUnique({
        where: { id: data.church_id },
        select: { leader_id: true, name: true },
      });

      if (!church?.leader_id) {
        throw new CustomGraphQLError(
          `Church "${church?.name ?? data.church_id}" has no leader assigned. Please assign a leader to the church before creating a project.`,
          ErrorCode.BAD_REQUEST,
          400,
          { additional: { errorCode: 'CHURCH_HAS_NO_LEADER' } }
        );
      }
    }

    data.co_owner_id = userId;

    const project = await this.projectRepository.create(data, userId);

    // Grant PROJECT_CO_OWNER role to whoever registered the project
    try {
      const coOwnerRole = await this.prisma.role.findUnique({
        where: { key_code: 'PROJECT_CO_OWNER' },
        select: { id: true },
      });
      if (coOwnerRole) {
        await this.userRepository.addRoleToUser(userId, coOwnerRole.id, userId);
      }
    } catch {
      // Role may already be assigned — safe to ignore
    }

    return project;
  }

  async update(id: string, data: ProjectUpdateDto, userId: string): Promise<Project> {
    // Get current project to check status
    const existingProject = await this.findById(id);
    if (!existingProject) {
      throw new CustomGraphQLError(
        'Project not found',
        ErrorCode.NOT_FOUND,
        404,
        { additional: { errorCode: 'PROJECT_NOT_FOUND' } }
      );
    }

    // Prevent co-owners from changing the project owner
    if (data.owner_id && data.owner_id !== existingProject.owner_id) {
      const caller = await this.userRepository.findByIdWithRoles(userId);
      const privilegedRoles = ['ADMIN', 'DEV', 'INSTITUTIONAL_LEADER', 'INSTITUTIONAL_DEPARTMENT_LEADER', 'CHURCH_LEADER', 'DEPARTMENT_CHURCH_LEADER', 'FINANCIAL_MANAGER'];
      const hasPrivilege = caller?.user_roles?.some((ur: any) => privilegedRoles.includes(ur.role?.key_code));
      if (!hasPrivilege) {
        throw new CustomGraphQLError(
          'Only administrators and leaders can change the project owner',
          ErrorCode.FORBIDDEN,
          403,
          { additional: { errorCode: 'CANNOT_CHANGE_PROJECT_OWNER' } }
        );
      }
    }

    // Block any modifications if project is CONCLUDED
    if (existingProject.status === ProjectStatus.CONCLUDED) {
      throw new CustomGraphQLError(
        'Cannot modify a concluded project',
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'PROJECT_IS_CONCLUDED' } }
      );
    }

    const isOwner = userId === existingProject.owner_id;
    const isCoOwner = userId === existingProject.co_owner_id;

    // 1. Status Change Permissions
    if (data.status && data.status !== existingProject.status) {
      if (!isOwner) {
        // Co-owner can only transition from DRAFT to OPEN_REQUEST
        if (isCoOwner && existingProject.status === ProjectStatus.DRAFT && data.status === ProjectStatus.OPEN_REQUEST) {
           // allowed
        } else {
           throw new CustomGraphQLError(
             'Only the institutional owner can change the project status',
             ErrorCode.UNAUTHORIZED,
             401,
             { additional: { errorCode: 'UNAUTHORIZED_STATUS_CHANGE' } }
           );
        }
      }
    }

    // 2. Edit Limit for Co-Owner
    if (isCoOwner && !isOwner && existingProject.status !== ProjectStatus.DRAFT) {
      // Allow them to update co_owner_id or other non-financial fields if needed, 
      // but "só pode editar valores e atividades enquanto o projeto estiver em modo Draft"
      if (data.budget !== undefined || data.title !== undefined || data.description !== undefined || data.subsidized_budget !== undefined) {
         throw new CustomGraphQLError(
           'Members can only edit project details while it is in DRAFT status',
           ErrorCode.BAD_REQUEST,
           400,
           { additional: { errorCode: 'EDIT_LOCKED_NOT_DRAFT' } }
         );
      }
    }

    // 3. Budget Lock (Teto de Gastos)
    // Se não estiver nas fases iniciais, o subsidized_budget não pode ser alterado.
    const initialStatuses = [ProjectStatus.DRAFT, ProjectStatus.OPEN_REQUEST, ProjectStatus.IN_REVIEW, ProjectStatus.ADJUSTMENTS_NEEDED];
    if (!initialStatuses.includes(existingProject.status as ProjectStatus)) {
       if (data.subsidized_budget !== undefined && Number(data.subsidized_budget) !== Number(existingProject.subsidized_budget)) {
           throw new CustomGraphQLError(
             'Cannot change subsidized budget after project approval',
             ErrorCode.BAD_REQUEST,
             400,
             { additional: { errorCode: 'BUDGET_LOCKED_AFTER_APPROVAL' } }
           );
       }
    }

    // Validate transition to CONCLUDED
    if (data.status === ProjectStatus.CONCLUDED) {
      await this.validateConcludedTransition(id);
    }

    // If project is EXPIRED and end_at is being extended to future, revert to IN_PROGRESS
    if (existingProject.status === ProjectStatus.EXPIRED && data.end_at) {
      const newEndDate = new Date(data.end_at);
      const now = new Date();
      if (newEndDate > now) {
        // Automatically revert status to IN_PROGRESS when extending expired project
        data.status = ProjectStatus.IN_PROGRESS;
      }
    }

    // Allocate budget only when the project transitions to IN_PROGRESS
    if (existingProject.status !== ProjectStatus.IN_PROGRESS && data.status === ProjectStatus.IN_PROGRESS) {
      const budgetToAllocate = data.subsidized_budget ?? existingProject.subsidized_budget;
      if (budgetToAllocate && Number(budgetToAllocate) > 0) {
        await this.annualBudgetService.updateBudgetFinancials(
          existingProject.department_id,
          new Date(existingProject.start_at).getFullYear(),
          Number(budgetToAllocate),
          0,
          userId,
          {
            type: 'ALLOCATION_RESERVED',
            description: `Initial project budget reservation: ${existingProject.title}`,
            project_id: existingProject.id
          }
        );
      }
    }

    // Release budget when project is manually reverted to DRAFT from IN_PROGRESS
    if (existingProject.status === ProjectStatus.IN_PROGRESS && data.status === ProjectStatus.DRAFT) {
      const budgetToRelease = existingProject.subsidized_budget;
      if (budgetToRelease && Number(budgetToRelease) > 0) {
        await this.annualBudgetService.updateBudgetFinancials(
          existingProject.department_id,
          new Date(existingProject.start_at).getFullYear(),
          -Number(budgetToRelease), // negative = release
          0,
          userId,
          {
            type: 'ALLOCATION_RELEASED',
            description: `Project reverted to DRAFT, budget released: ${existingProject.title}`,
            project_id: existingProject.id
          }
        );
      }
    }

    const updatedProject = await this.projectRepository.update(id, data, userId);

    // 4. Notifications on Status Change
    if (data.status && data.status !== existingProject.status) {
      this.handleStatusChangeNotifications(updatedProject).catch(e => {
        console.error('Failed to send status change notifications:', e);
      });
    }

    return updatedProject;
  }

  private async handleStatusChangeNotifications(project: Project): Promise<void> {
    const owner = await this.userRepository.findById(project.owner_id);
    const coOwner = project.co_owner_id ? await this.userRepository.findById(project.co_owner_id) : null;
    
    const notificationMessage = `Project "${project.title}" status changed to ${project.status}`;

    // Helper to send email
    const sendEmail = async (user: any) => {
      if (user?.email) {
        await this.emailService.sendProjectStatusChangedEmail({
          to: user.email,
          projectName: project.title,
          projectUrl: `${process.env.FRONTEND_URL}/dashboard/projects/${project.id}`,
          newStatus: project.status,
          recipientName: user.name,
          language: user.language_preference,
        });
      }
    };

    // Helper to send in-app notification
    const sendAppNotification = async (user: any) => {
       if (user?.id && project.institution_id) {
         await this.notificationService.create({
            user_id: user.id,
            institution_id: project.institution_id,
            type: 'PROJECT_STATUS_CHANGED',
            message: notificationMessage,
            read_status: false,
         }, 'system');
       }
    };

    // Notify Co-Owner (Member)
    if (coOwner) {
       await sendEmail(coOwner);
       await sendAppNotification(coOwner);
    }

    // Notify Owner (Ministerial)
    if (owner && owner.id !== coOwner?.id) {
       await sendEmail(owner);
       await sendAppNotification(owner);
    }
  }

  /**
   * Atualiza apenas o co_owner_id de um projeto
   * @param projectId - ID do projeto
   * @param data - Dados contendo o co_owner_id
   * @param userId - ID do usuário que está realizando a atualização
   * @returns Projeto atualizado
   */
  async updateCoOwner(projectId: string, data: ProjectUpdateCoOwnerDto, userId: string): Promise<Project> {
    // Validar se o projeto existe e se não está concluído
    const existingProject = await this.findById(projectId);
    if (!existingProject) {
      throw new CustomGraphQLError(
        'Project not found',
        ErrorCode.NOT_FOUND,
        404,
        { additional: { errorCode: 'PROJECT_NOT_FOUND' } }
      );
    }

    // Block modification if project is CONCLUDED
    if (existingProject.status === ProjectStatus.CONCLUDED) {
      throw new CustomGraphQLError(
        'Cannot modify a concluded project',
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'PROJECT_IS_CONCLUDED' } }
      );
    }

    return this.projectRepository.updateCoOwner(projectId, data, userId);
  }

  /**
   * Validates if a project can transition to CONCLUDED status.
   * Requirements:
   * - All activities must have status = COMPLETED
   * - All activity documents must be validated
   * - All subsidies must have status = CLOSED
   */
  async validateConcludedTransition(projectId: string): Promise<void> {
    // Check for incomplete activities
    const incompleteActivities = await this.prisma.projectActivity.count({
      where: {
        project_id: projectId,
        is_deleted: false,
        status: { not: 'COMPLETED' },
      },
    });

    if (incompleteActivities > 0) {
      throw new CustomGraphQLError(
        `Cannot conclude project: ${incompleteActivities} activities are not completed`,
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'PROJECT_HAS_INCOMPLETE_ACTIVITIES', count: incompleteActivities } }
      );
    }

    // Check for unvalidated documents
    const unvalidatedDocuments = await this.prisma.activityDocuments.count({
      where: {
        project_activity: {
          project_id: projectId,
          is_deleted: false,
        },
        is_deleted: false,
        is_validated: false,
      },
    });

    if (unvalidatedDocuments > 0) {
      throw new CustomGraphQLError(
        `Cannot conclude project: ${unvalidatedDocuments} documents are not validated`,
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'PROJECT_HAS_UNVALIDATED_DOCUMENTS', count: unvalidatedDocuments } }
      );
    }

    // Check for open subsidies (not CLOSED)
    const openSubsidies = await this.prisma.subsidyRequest.count({
      where: {
        project_id: projectId,
        is_deleted: false,
        subsidy_status: {
          name: { not: 'CLOSED' },
        },
      },
    });

    if (openSubsidies > 0) {
      throw new CustomGraphQLError(
        `Cannot conclude project: ${openSubsidies} subsidy requests are not closed`,
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'PROJECT_HAS_OPEN_SUBSIDIES', count: openSubsidies } }
      );
    }
  }

  /**
   * Checks if project should revert to DRAFT status (no activities).
   * Called after deleting an activity.
   */
  async checkAndRevertToDraft(projectId: string, userId: string): Promise<void> {
    const project = await this.findById(projectId);
    if (!project || project.status === ProjectStatus.CONCLUDED) {
      return; // Don't change CONCLUDED projects
    }

    const activeActivities = await this.prisma.projectActivity.count({
      where: {
        project_id: projectId,
        is_deleted: false,
      },
    });

    if (activeActivities === 0 && project.status !== ProjectStatus.DRAFT) {
      if (project.status === ProjectStatus.IN_PROGRESS && project.subsidized_budget && Number(project.subsidized_budget) > 0) {
        await this.annualBudgetService.updateBudgetFinancials(
          project.department_id,
          new Date(project.start_at).getFullYear(),
          -Number(project.subsidized_budget), // release
          0,
          userId,
          {
            type: 'ALLOCATION_RELEASED',
            description: `Project ${project.title} reverted to DRAFT status (no activities)`,
            project_id: project.id
          }
        );
      }
      await this.projectRepository.update(projectId, { status: ProjectStatus.DRAFT }, userId);
      console.log(`📋 Project ${projectId} reverted to DRAFT (no activities)`);
    }
  }

  async delete(id: string, userId: string): Promise<Project> {
    console.log(`🗑️  Starting soft delete for project ${id}`);

    // 1. Find all subsidies for this project
    const subsidies = await this.prisma.subsidyRequest.findMany({
      where: {
        project_id: id,
        is_deleted: false,
      },
      include: {
        subsidy_status: true,
      },
    });

    console.log(`📋 Found ${subsidies.length} subsidy requests for project`);

    // 2. Validate: Block if any subsidy is APPROVED or CLOSED
    if (subsidies.length > 0) {
      const blockedStatuses = ['APPROVED', 'CLOSED'];
      const blockedSubsidies = subsidies.filter(
        (s) => s.subsidy_status?.name && blockedStatuses.includes(s.subsidy_status.name)
      );

      if (blockedSubsidies.length > 0) {
        const statusNames = blockedSubsidies.map((s) => s.subsidy_status?.name).join(', ');
        throw new CustomGraphQLError(
          `Cannot delete project because it has subsidies with statuses: ${statusNames}. Financial records (approved or closed subsidies) must be preserved. Please remove or reject these subsidies if you truly wish to delete the project, or conclude the project instead.`,
          ErrorCode.BAD_REQUEST,
          400,
          { additional: { errorCode: 'PROJECT_HAS_APPROVED_SUBSIDIES' } }
        );
      }
    }

    // 3. Delete all subsidies (uses existing service with validation)
    console.log(`🔄 Deleting ${subsidies.length} subsidy requests...`);
    for (const subsidy of subsidies) {
      await this.subsidyRequestService.delete(subsidy.id, userId);
    }

    // 4. Delete all activities (uses existing service with validation)
    const activities = await this.prisma.projectActivity.findMany({
      where: {
        project_id: id,
        is_deleted: false,
      },
    });

    console.log(`🔄 Deleting ${activities.length} activities...`);
    for (const activity of activities) {
      await this.projectActivityService.softDelete(activity.id, userId);
    }

    // 5. Soft delete special projects
    console.log(`📄 Soft deleting special projects...`);
    await this.prisma.specialProjects.updateMany({
      where: {
        project_id: id,
        is_deleted: false,
      },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
      },
    });

    // 6. Delete voluntary users (hard delete - join table)
    console.log(`👥 Deleting voluntary users...`);
    await this.prisma.voluntariesOnProjects.deleteMany({
      where: { project_id: id },
    });

    // 7. Release subsidized_budget from annual budget
    const projectData = await this.prisma.project.findUnique({
      where: { id },
      select: { department_id: true, subsidized_budget: true, start_at: true, status: true }
    });

    if (projectData?.department_id && projectData.subsidized_budget && projectData.status === ProjectStatus.IN_PROGRESS) {
      const projectYear = new Date(projectData.start_at).getFullYear();
      console.log(`💰 Releasing subsidized_budget ${Number(projectData.subsidized_budget)} from annual budget (year: ${projectYear})...`);
      await this.annualBudgetService.updateBudgetFinancials(
        projectData.department_id,
        projectYear,
        -Number(projectData.subsidized_budget), // Release allocation
        0,
        userId,
        {
           type: 'ALLOCATION_RELEASED',
           description: `Project deleted: reserved budget released`,
           project_id: id
        }
      );
    }

    // 8. Soft delete the project
    console.log(`🎯 Soft deleting project...`);
    const deletedProject = await this.projectRepository.softDelete(id, userId);

    console.log(`✅ Project ${id} soft deleted successfully`);
    return deletedProject;
  }

  async findById(id: string): Promise<Project | null> {
    return this.projectRepository.findById(id);
  }

  async findAll(institutionId?: string, userId?: string): Promise<Project[]> {
    let user: UserWithRoles | null = null;
    if (userId) {
      user = await this.userRepository.findByIdWithRoles(userId);
    }
    return this.projectRepository.findAll(institutionId, user);
  }

  async getProjectsByChurch(churchId: string): Promise<Project[]> {
    return this.projectRepository.findByChurchId(churchId);
  }

  async getMyProjects(userId: string): Promise<Project[]> {
    return this.projectRepository.findMyProjects(userId);
  }

  async getProjectCollaborators(projectId: string): Promise<ProjectCollaborator[]> {
    return this.projectRepository.findCollaboratorsByProjectId(projectId);
  }

  async getProjectKPIs(institutionId?: string): Promise<ProjectKPIs> {
    const projectsData = await this.prisma.project.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          department: {
            institution_id: institutionId,
          },
        }),
      },
      include: {
        activities: {
          where: {
            is_deleted: false,
          },
        },
      },
    });

    // Type assertion to access fields that exist in the schema but TypeScript doesn't recognize
    const projects = projectsData as Array<typeof projectsData[0] & { subsidized_budget: any }>

    const now = new Date();
    const activeProjects = projects.filter(p => {
      const start = new Date(p.start_at);
      const end = new Date(p.end_at);
      return start <= now && end >= now;
    });

    const completedProjects = projects.filter(p => {
      const end = new Date(p.end_at);
      return end < now;
    });

    const upcomingProjects = projects.filter(p => {
      const start = new Date(p.start_at);
      return start > now;
    });

    const totalBudget = DecimalHelper.sum(projects.map(p => p.budget));
    const totalSubsidizedBudget = DecimalHelper.sum(projects.map(p => p.subsidized_budget));

    // Count subsidy requests (projects with special projects)
    const specialProjects = await this.prisma.specialProjects.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          institution_id: institutionId,
        }),
        subsidy_status: {
          name: {
            not: 'rejected',
          },
        },
      },
    });

    const totalSubsidyAmount = DecimalHelper.sum(specialProjects.map(sp => sp.budget));

    return {
      totalProjects: projects.length,
      activeProjects: activeProjects.length,
      completedProjects: completedProjects.length,
      upcomingProjects: upcomingProjects.length,
      totalBudget: totalBudget.toNumber(),
      totalSubsidizedBudget: totalSubsidizedBudget.toNumber(),
      totalSubsidyRequests: specialProjects.length,
      totalSubsidyAmount: totalSubsidyAmount.toNumber(),
      projectsWithVolunteers: projects.filter(p => p.required_volunteers).length,
      averageBudgetPerProject: projects.length > 0 ? totalBudget.dividedBy(projects.length).toNumber() : 0,
    };
  }

  async getProjectsByDepartment(institutionId?: string): Promise<ProjectsByDepartment[]> {
    const projects = await this.prisma.project.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          department: {
            institution_id: institutionId,
          },
        }),
      },
      include: {
        department: true,
      },
    });

    // Group by department
    const departmentMap = new Map<string, { name: string; projects: any[]; annualBudget: number }>();

    for (const project of projects) {
      if (!project.department) continue;

      if (!departmentMap.has(project.department_id)) {
        // Get department annual budget
        const annualBudget = await this.prisma.annualBudget.findFirst({
          where: {
            department_id: project.department_id,
            year: new Date().getFullYear(),
            is_deleted: false,
          },
        });

        departmentMap.set(project.department_id, {
          name: project.department.name,
          projects: [],
          annualBudget: DecimalHelper.toDecimal(annualBudget?.planned_budget).toNumber(),
        });
      }

      departmentMap.get(project.department_id)?.projects.push(project);
    }

    // Calculate metrics for each department
    const result: ProjectsByDepartment[] = [];
    departmentMap.forEach((value) => {
      const budgetUsed = DecimalHelper.sum(value.projects.map(p => p.budget));
      const annualBudget = DecimalHelper.toDecimal(value.annualBudget);
      result.push({
        department: value.name,
        projects: value.projects.length,
        budget_used: budgetUsed.toNumber(),
        remaining_budget: annualBudget.minus(budgetUsed).toNumber(),
        annual_budget: annualBudget.toNumber(),
      });
    });

    return result;
  }

  async getSubsidyStatusDistribution(institutionId?: string): Promise<SubsidyStatusDistribution[]> {
    const specialProjects = await this.prisma.specialProjects.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          institution_id: institutionId,
        }),
      },
      include: {
        subsidy_status: true,
      },
    });

    // Group by status
    const statusMap = new Map<string, number>();
    specialProjects.forEach(sp => {
      const status = sp.subsidy_status?.name || 'Pending';
      statusMap.set(status, (statusMap.get(status) || 0) + 1);
    });

    // Map status to colors
    const statusColors: Record<string, string> = {
      'Approved': '#22c55e',
      'Pending': '#f59e0b',
      'In Analysis': '#3b82f6',
      'Rejected': '#ef4444',
    };

    const result: SubsidyStatusDistribution[] = [];
    statusMap.forEach((count, status) => {
      result.push({
        status,
        count,
        color: statusColors[status] || '#6b7280',
      });
    });

    return result;
  }

  async getProjectsTimeline(institutionId?: string): Promise<ProjectsTimeline[]> {
    const projects = await this.prisma.project.findMany({
      where: {
        is_deleted: false,
        ...(institutionId && {
          department: {
            institution_id: institutionId,
          },
        }),
      },
      orderBy: { created_at: 'asc' },
    });

    // Group by month
    const monthMap = new Map<string, { created: number; completed: number; budget: number }>();

    projects.forEach(project => {
      const createdMonth = new Date(project.created_at).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
      const endMonth = new Date(project.end_at).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });

      // Count created projects
      if (!monthMap.has(createdMonth)) {
        monthMap.set(createdMonth, { created: 0, completed: 0, budget: 0 });
      }
      const createdData = monthMap.get(createdMonth)!;
      createdData.created += 1;
      createdData.budget = DecimalHelper.toDecimal(createdData.budget).plus(project.budget).toNumber();

      // Count completed projects
      const now = new Date();
      const end = new Date(project.end_at);
      if (end < now) {
        if (!monthMap.has(endMonth)) {
          monthMap.set(endMonth, { created: 0, completed: 0, budget: 0 });
        }
        const endData = monthMap.get(endMonth)!;
        endData.completed += 1;
      }
    });

    // Convert to array and get last 6 months
    const result: ProjectsTimeline[] = [];
    const sortedMonths = Array.from(monthMap.entries())
      .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime())
      .slice(-6);

    sortedMonths.forEach(([month, data]) => {
      result.push({
        month,
        created: data.created,
        completed: data.completed,
        budget: data.budget,
      });
    });

    return result;
  }
}
