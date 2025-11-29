import { Injectable } from '@nestjs/common';
import {
  InstitutionCreateDto,
  InstitutionUpdateDto,
} from '../dto/institution.dto';
import { Institution } from '../@generated/institution/institution.model';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { ContactRepository, ChurchRepository, CommunicationRepository, DepartmentRepository, InstitutionRepository, ProjectRepository, NotificationRepository, RegionRepository, SettingRepository, SubsidyRequestRepository, UserRepository, AnnualBudgetRepository } from 'src/repositories';
import { DirectMessageRepository } from 'src/repositories/direct-message.repository';
import { ChurchChartData } from '../models/church.model';

@Injectable()
export class InstitutionService {
  constructor(
    private readonly institutionRepository: InstitutionRepository,
    private readonly regionRepository: RegionRepository,
    private readonly churchRepository: ChurchRepository,
    private readonly departmentRepository: DepartmentRepository,
    private readonly userRepository: UserRepository,
    private readonly communicationRepository: CommunicationRepository,
    private readonly notificationRepository: NotificationRepository,
    private readonly settingRepository: SettingRepository,
    private readonly projectRepository: ProjectRepository,
    private readonly directMessageRepository: DirectMessageRepository,
    private readonly subsidyRequestRepository: SubsidyRequestRepository,
    private readonly contactRepository: ContactRepository,
    private readonly annualBudgetRepository: AnnualBudgetRepository,
  ) {}

  async createInstitution(
    data: InstitutionCreateDto,
    userId: string,
  ): Promise<Institution> {
    return await this.institutionRepository.create(data, userId);
  }

  async updateInstitution(
    institution_id: string,
    data: InstitutionUpdateDto,
    userId: string,
  ): Promise<Institution> {
    return await this.institutionRepository.update(institution_id, data, userId);
  }

  async deleteInstitution(id: string, userId: string): Promise<Institution> {
    return await this.institutionRepository.cascadeSoftDelete(id, userId);
  }

  async getInstitutions(): Promise<Institution[]> {
    return await this.institutionRepository.findAll();
  }

  async getInstitutionById(id: string): Promise<Institution> {
    const institution = await this.institutionRepository.findById(id);
    if (!institution) {
      throw new CustomGraphQLError('Institution not found', ErrorCode.NOT_FOUND, 404);
    }
    return institution;
  }

  async getChurches(institutionId: string) {
    const churches = await this.churchRepository.findManyByFilters({ institution_id: institutionId}, true);
    return churches;
  }

  async getDepartmentsByInstitutionId(institutionId: string) {
    const departments = await this.departmentRepository.findManyByFilters({ institution_id: institutionId, church_id: null });
    return departments;
  }

  async getUsersByInstitutionId(institutionId: string) {
    const users = await this.userRepository.findManyByFilters({ institution_id: institutionId });
    return users;
  }

  async getCommunicationsByInstitutionId(institutionId: string) {
    return await this.communicationRepository.findManyByFilters({ institution_id: institutionId });
  }

  async getNotificationsByInstitutionId(institutionId: string) {
    return await this.notificationRepository.findManyByFilters({ institution_id: institutionId });
  }

  async getSettingsByInstitutionId(institutionId: string) {
    return await this.settingRepository.findManyByFilters({ institution_id: institutionId });
  }

  async getProjectsByInstitutionId(institutionId: string) {
    return (await this.projectRepository.findManyByFilters({ institution_id: institutionId }));
  }

  async getDirectMessagesByInstitutionId(institutionId: string) {
    return (await this.directMessageRepository.findManyByFilters({ institution_id: institutionId }));
  }

  async getSubsidyRequestsByInstitutionId(institutionId: string) {
    return (await this.subsidyRequestRepository.findManyByFilters({ institution_id: institutionId }));
  }

  async getContactByInstitutionId(institutionId: string) {
    return await this.contactRepository.findOneByFilters({ Institution: { id: institutionId} });
  }

  async getAnnualBudgetByInstitutionId(institutionId: string) {
    return await this.annualBudgetRepository.findManyByFilters({ institution_id: institutionId });
  }

  async getChurchesKpiDataForInstitution(institutionId: string) {
    // Get all ACTIVE churches for this institution and calculate their KPI data
    const churches = await this.churchRepository.findManyByFilters({ 
      institution_id: institutionId,
      is_deleted: false 
    });
    
    if (churches.length === 0) {
      return {
        totalChurches: 0,
        totalMembers: 0,
        totalDepartments: 0,
        totalSubsidyRequests: 0,
        totalBudget: 0,
        totalUsedBudget: 0,
        budgetUtilization: 0,
        avgMembersPerChurch: 0,
      };
    }

    const kpiDataByChurch = await Promise.all(
      churches.map(church => this.churchRepository.getKPIData(church.id)),
    );

    // Calculate totals for active churches in this institution
    const totalMembers = kpiDataByChurch.reduce((sum, kpi) => sum + kpi.totalMembers, 0);
    const totalDepartments = kpiDataByChurch.reduce((sum, kpi) => sum + kpi.totalDepartments, 0);
    const totalSubsidyRequests = kpiDataByChurch.reduce((sum, kpi) => sum + kpi.totalSubsidyRequests, 0);
    const totalBudget = kpiDataByChurch.reduce((sum, kpi) => sum + kpi.totalBudget, 0);
    const totalUsedBudget = kpiDataByChurch.reduce((sum, kpi) => sum + kpi.totalUsedBudget, 0);

    // Calculate utilization percentage
    const budgetUtilization = totalBudget > 0
      ? parseFloat(((totalUsedBudget / totalBudget) * 100).toFixed(2))
      : 0;

    // Calculate average members per church for this institution only
    const avgMembersPerChurch = churches.length > 0
      ? parseFloat((totalMembers / churches.length).toFixed(2))
      : 0;

    return {
      totalChurches: churches.length, // Only active churches in this institution
      totalMembers,
      totalDepartments,
      totalSubsidyRequests,
      totalBudget,
      totalUsedBudget,
      budgetUtilization,
      avgMembersPerChurch,
    };
  }

  async getActiveChurchesChartData(institutionId: string): Promise<ChurchChartData[]> {
    // Get all ACTIVE churches for this institution for chart display
    const churches = await this.churchRepository.findManyByFilters({ 
      institution_id: institutionId,
      is_deleted: false 
    });

    if (churches.length === 0) {
      return [];
    }

    // Paleta de cores para diferenciar igrejas
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#ec4899'];

    // Process data for charts
    const chartData: ChurchChartData[] = churches.map((church: any, index: number) => {
      // Calculate members
      const members = church.users?.length || 0;
      const activeMembers = church.users?.filter((u: any) => !u.is_deleted).length || 0;

      // Calculate projects from departments
      const allProjects = church.departments?.reduce((sum: number, dept: any) => {
        return sum + (dept.projects?.length || 0);
      }, 0) || 0;

      const activeProjects = church.departments?.reduce((sum: number, dept: any) => {
        return sum + (dept.projects?.filter((p: any) => !p.is_deleted).length || 0);
      }, 0) || 0;

      return {
        church: church.name.replace('Igreja ', '').replace(' de ', ' '),
        fullName: church.name,
        members,
        activeMembers,
        projects: allProjects,
        activeProjects,
        fill: colors[index % colors.length]
      };
    });

    return chartData;
  }

  async getInstitutionChartsData(institutionId: string) {
    const [usersByRoleData, monthlyUserGrowth, churchesByRegionData] = await Promise.all([
      this.userRepository.getUsersByRoleForInstitution(institutionId),
      this.userRepository.getMonthlyUserGrowthForInstitution(institutionId),
      this.userRepository.getChurchesByRegionForInstitution(institutionId)
    ]);

    return {
      usersByRole: usersByRoleData,
      monthlyUserGrowth,
      churchesByRegion: churchesByRegionData
    };
  }
}
