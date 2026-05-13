import { Injectable } from '@nestjs/common';
import {
  InstitutionCreateDto,
  InstitutionUpdateDto,
} from '../dto/institution.dto';
import { Institution } from '../@generated/institution/institution.model';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { ContactRepository, ChurchRepository, CommunicationRepository, DepartmentRepository, InstitutionRepository, ProjectRepository, NotificationRepository, RegionRepository, SettingRepository, SubsidyRequestRepository, UserRepository, AnnualBudgetRepository } from 'src/repositories';
import { DirectMessageRepository } from 'src/repositories/direct-message.repository';
import { ChurchChartData, ChurchActivityData } from '../models/church.model';
import { DecimalHelper } from 'src/common/helpers/decimal.helper';
import { Decimal } from '@prisma/client/runtime/library';

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
    const churches = await this.churchRepository.findManyByFilters({ institution_id: institutionId }, false);
    return churches;
  }

  async getDepartmentsByInstitutionId(institutionId: string) {

    const departments = await this.departmentRepository.findManyByFilters({
      institution_id: institutionId,
      church_id: null,
    });
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
    const totalMembers = DecimalHelper.sum(kpiDataByChurch.map(kpi => kpi.totalMembers)).toNumber();
    const totalDepartments = DecimalHelper.sum(kpiDataByChurch.map(kpi => kpi.totalDepartments)).toNumber();
    const totalSubsidyRequests = DecimalHelper.sum(kpiDataByChurch.map(kpi => kpi.totalSubsidyRequests)).toNumber();
    
    // Aggregations using DecimalHelper for precision
    const totalBudget = DecimalHelper.sum(kpiDataByChurch.map(kpi => kpi.totalBudget));
    const totalUsedBudget = DecimalHelper.sum(kpiDataByChurch.map(kpi => kpi.totalUsedBudget));

    // Calculate utilization percentage
    const budgetUtilization = totalBudget.gt(0)
      ? totalUsedBudget.dividedBy(totalBudget).times(100)
      : new Decimal(0);

    // Calculate average members per church for this institution only
    const avgMembersPerChurch = churches.length > 0
      ? new Decimal(totalMembers).dividedBy(churches.length).toNumber()
      : 0;

    return {
      totalChurches: churches.length, // Only active churches in this institution
      totalMembers,
      totalDepartments,
      totalSubsidyRequests,
      totalBudget: totalBudget.toNumber(),
      totalUsedBudget: totalUsedBudget.toNumber(),
      budgetUtilization: DecimalHelper.round(budgetUtilization, 2).toNumber(),
      avgMembersPerChurch: DecimalHelper.round(avgMembersPerChurch, 2).toNumber(),
    };
  }

  async getChurchesActivityDataForInstitution(institutionId: string) {
    // Get all ACTIVE churches for this institution with full relations
    const churches = await this.churchRepository.findManyByFilters({ 
      institution_id: institutionId,
      is_deleted: false 
    }, false, {
      include: {
        users: { where: { is_deleted: false } },
        departments: { 
          where: { is_deleted: false },
          include: {
            users: { where: { is_deleted: false } },
            projects: { where: { is_deleted: false } }
          }
        }
      }
    });

    if (churches.length === 0) {
      return [];
    }

    // Calculate activity score for each church
    const calculateChurchActivity = (church: any) => {
      let activityScore = 5; // Base score per active church
      let hasRecentActivity = false;
      let hasRecentDepartments = false;
      let hasRecentProjects = false;
      let hasUpdatedChurch = false;
      let hasNewUsers = false;
      
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      
      // User activity points
      if (church.users && church.users.length > 0) {
        church.users.forEach((user: any) => {
          activityScore += 2; // Base points per active user
          
          try {
            const userUpdateDate = new Date(user.updated_at || user.created_at);
            
            // Recent activity bonus (30 days)
            if (userUpdateDate > thirtyDaysAgo) {
              activityScore += 5;
              hasRecentActivity = true;
            }
            
            // New user bonus (7 days)
            if (new Date(user.created_at) > sevenDaysAgo) {
              activityScore += 8;
              hasNewUsers = true;
            }
          } catch (e) {
            // Invalid date, use base points only
          }
        });
      }
      
      // Department activity points
      if (church.departments && church.departments.length > 0) {
        church.departments.forEach((dept: any) => {
          activityScore += 3; // Base points per active department
          
          try {
            const deptUpdateDate = new Date(dept.updated_at || dept.created_at);
            
            // Recent department activity
            if (deptUpdateDate > thirtyDaysAgo) {
              activityScore += 8;
              hasRecentDepartments = true;
            }
            
            // Project activity points
            if (dept.projects && dept.projects.length > 0) {
              dept.projects.forEach((project: any) => {
                activityScore += 1; // Base points per active project
                
                try {
                  const projectUpdateDate = new Date(project.updated_at || project.created_at);
                  
                  // Recent project activity
                  if (projectUpdateDate > thirtyDaysAgo) {
                    activityScore += 3;
                    hasRecentProjects = true;
                  }
                } catch (e) {
                  // Invalid date
                }
              });
            }
          } catch (e) {
            // Invalid date
          }
        });
      }
      
      // Church activity points
      try {
        const churchUpdateDate = new Date(church.updated_at || church.created_at);
        
        if (churchUpdateDate > thirtyDaysAgo) {
          activityScore += 10;
          hasUpdatedChurch = true;
        }
      } catch (e) {
        // Invalid date
      }
      
      return {
        activityScore: Math.max(activityScore, 1), // Minimum 1 point per church
        hasRecentActivity,
        hasRecentDepartments,
        hasRecentProjects,
        hasUpdatedChurch,
        hasNewUsers
      };
    };

    // Generate monthly activity data
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    const result: ChurchActivityData[] = [];
    
    for (const church of churches) {
      const activityData = calculateChurchActivity(church as any);
      
      // Create data for each month
      for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
        let monthlyActivity = 0;
        
        if (monthIndex <= currentMonth) {
          // Calculate activity based on score and month
          const baseActivity = activityData.activityScore / 12;
          const monthProgress = (monthIndex + 1) / 12;
          
          // Add variation based on recent activity
          const hasRecentActivity = (church as any).updated_at && 
            new Date((church as any).updated_at) > new Date(currentYear, monthIndex, 1);
          
          monthlyActivity = Math.floor(baseActivity * monthProgress * (hasRecentActivity ? 1.5 : 1));
        }
        
        result.push({
          church_id: church.id,
          church_name: church.name,
          month: months[monthIndex],
          year: currentYear,
          activity_score: Math.max(monthlyActivity, 0),
          user_count: (church as any).users?.length || 0,
          department_count: (church as any).departments?.length || 0,
          project_count: (church as any).departments?.reduce((sum: number, dept: any) => {
            return sum + (dept.projects?.length || 0);
          }, 0) || 0,
          has_recent_activity: activityData.hasRecentActivity,
          has_recent_departments: activityData.hasRecentDepartments,
          has_recent_projects: activityData.hasRecentProjects,
          has_updated_church: activityData.hasUpdatedChurch,
          has_new_users: activityData.hasNewUsers
        });
      }
    }
    
    return result;
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
