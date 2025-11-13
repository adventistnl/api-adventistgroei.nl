import { Injectable } from '@nestjs/common';
import {
  InstitutionCreateDto,
  InstitutionUpdateDto,
} from '../dto/institution.dto';
import { Institution } from '../@generated/institution/institution.model';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { ContactRepository, ChurchRepository, CommunicationRepository, DepartmentRepository, InstitutionRepository, ProjectRepository, NotificationRepository, RegionRepository, SettingRepository, SubsidyRequestRepository, UserRepository, AnnualBudgetRepository } from 'src/repositories';
import { DirectMessageRepository } from 'src/repositories/direct-message.repository';

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

  async getInstitutionById(id: string): Promise<Institution | null> {
    const institution = await this.institutionRepository.findById(id);
    if (!institution) {
      throw new CustomGraphQLError('Institution not found', ErrorCode.NOT_FOUND, 404);
    }
    return institution;
  }

  async getChurches(institutionId: string) {
    const churches = await this.churchRepository.findManyByFilters({ institution_id: institutionId, is_deleted: false });
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
    // Get all churches for this institution and calculate their KPI data
    const churches = await this.churchRepository.findManyByFilters({ institution_id: institutionId });
    
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

    // Aggregate all KPI data
    const aggregated = {
      totalChurches: churches.length,
      totalMembers: kpiDataByChurch.reduce((sum, kpi) => sum + kpi.totalMembers, 0),
      totalDepartments: kpiDataByChurch.reduce((sum, kpi) => sum + kpi.totalDepartments, 0),
      totalSubsidyRequests: kpiDataByChurch.reduce((sum, kpi) => sum + kpi.totalSubsidyRequests, 0),
      totalBudget: kpiDataByChurch.reduce((sum, kpi) => sum + kpi.totalBudget, 0),
      totalUsedBudget: kpiDataByChurch.reduce((sum, kpi) => sum + kpi.totalUsedBudget, 0),
      budgetUtilization: 0,
      avgMembersPerChurch: 0,
    };

    // Calculate utilization percentage
    aggregated.budgetUtilization = aggregated.totalBudget > 0
      ? parseFloat(((aggregated.totalUsedBudget / aggregated.totalBudget) * 100).toFixed(2))
      : 0;

    // Calculate average members per church
    aggregated.avgMembersPerChurch = churches.length > 0
      ? parseFloat((aggregated.totalMembers / churches.length).toFixed(2))
      : 0;

    return aggregated;
  }
}
