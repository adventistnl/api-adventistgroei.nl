import { Resolver, Query, Mutation, Args, Context, Float } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { SubsidyRequestService } from '../services/subsidy-request.service';
import { SubsidyRequest } from '../@generated/subsidy-request/subsidy-request.model';
import { SubsidyStatusHistory } from 'src/@generated/subsidy-status-history/subsidy-status-history.model';
import { SubsidyRequestCreateDto, SubsidyRequestUpdateDto } from '../dto/subsidy-request.dto';
import { SubsidyKPIs, SubsidyByDepartment, SubsidyByMonth, SubsidyByStatus } from '../dto/subsidy-analytics.dto';
import { Permission } from '../middlewares';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { LanguagePreference } from '../@generated/prisma/language-preference.enum';

@Resolver(() => SubsidyRequest)
export class SubsidyRequestResolver {
  constructor(private readonly subsidyRequestService: SubsidyRequestService) {}

  @Query(() => [SubsidyRequest], { name: 'subsidyRequests' })
  @UseGuards(PermissionsGuard)
  @Permission()
  async subsidyRequests(
    @Args('project_id', { type: () => String, nullable: true }) projectId?: string,
  ): Promise<SubsidyRequest[]> {
    if (projectId) {
      return this.subsidyRequestService.findByProjectId(projectId);
    }
    return this.subsidyRequestService.findAll();
  }

  @Query(() => SubsidyRequest, { nullable: true })
  @UseGuards(PermissionsGuard)
  @Permission()
  async subsidyRequest(@Args('id') id: string): Promise<SubsidyRequest | null> {
    return this.subsidyRequestService.findById(id);
  }

  @Mutation(() => SubsidyRequest)
  @UseGuards(PermissionsGuard)
  @Permission()
  async createSubsidyRequest(
    @Args('data') data: SubsidyRequestCreateDto,
    @Args('language', { type: () => LanguagePreference, nullable: true, defaultValue: LanguagePreference.en }) language: LanguagePreference,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.create(data, context.userId, language);
  }

  @Mutation(() => SubsidyRequest)
  @UseGuards(PermissionsGuard)
  @Permission()
  async updateSubsidyRequest(
    @Args('id') id: string,
    @Args('data') data: SubsidyRequestUpdateDto,
    @Args('language', { type: () => LanguagePreference, nullable: true, defaultValue: LanguagePreference.en }) language: LanguagePreference,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.update(id, data, context.userId, language);
  }

  @Mutation(() => SubsidyRequest)
  @UseGuards(PermissionsGuard)
  @Permission()
  async deleteSubsidyRequest(
    @Args('id') id: string,
    @Args('language', { type: () => LanguagePreference, nullable: true, defaultValue: LanguagePreference.en }) language: LanguagePreference,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.delete(id, context.userId, language);
  }

  @Mutation(() => SubsidyRequest)
  @UseGuards(PermissionsGuard)
  @Permission()
  async approveSubsidyRequest(
    @Args('id') id: string,
    @Args('approved_amount', { type: () => Float }) approvedAmount: number,
    @Args('language', { type: () => LanguagePreference, nullable: true, defaultValue: LanguagePreference.en }) language: LanguagePreference,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.approve(id, approvedAmount, context.userId, language);
  }

  @Mutation(() => SubsidyRequest)
  @UseGuards(PermissionsGuard)
  @Permission()
  async rejectSubsidyRequest(
    @Args('id') id: string,
    @Args('rejection_reason') rejectionReason: string,
    @Args('language', { type: () => LanguagePreference, nullable: true, defaultValue: LanguagePreference.en }) language: LanguagePreference,
    @Context() context: { userId: string },
  ): Promise<SubsidyRequest> {
    return this.subsidyRequestService.reject(id, rejectionReason, context.userId, language);
  }

  @Mutation(() => SubsidyStatusHistory)
  async addSubsidyRequestMessage(
    @Args('id') id: string,
    @Args('message') message: string,
    @Args('language', { type: () => LanguagePreference, nullable: true, defaultValue: LanguagePreference.en }) language: LanguagePreference,
    @Context() context: { userId: string },
  ): Promise<SubsidyStatusHistory> {
    return this.subsidyRequestService.addMessage(id, message, context.userId, language);
  }

  // Analytics queries
  @Query(() => SubsidyKPIs)
  @UseGuards(PermissionsGuard)
  @Permission()
  async subsidyKPIs(
    @Args('institutionId', { type: () => String, nullable: true }) institutionId?: string,
  ): Promise<SubsidyKPIs> {
    return this.subsidyRequestService.getSubsidyKPIs(institutionId);
  }

  @Query(() => [SubsidyByDepartment])
  @UseGuards(PermissionsGuard)
  @Permission()
  async subsidyByDepartment(
    @Args('institutionId', { type: () => String, nullable: true }) institutionId?: string,
  ): Promise<SubsidyByDepartment[]> {
    return this.subsidyRequestService.getSubsidyByDepartment(institutionId);
  }

  @Query(() => [SubsidyByMonth])
  @UseGuards(PermissionsGuard)
  @Permission()
  async subsidyByMonth(
    @Args('institutionId', { type: () => String, nullable: true }) institutionId?: string,
  ): Promise<SubsidyByMonth[]> {
    return this.subsidyRequestService.getSubsidyByMonth(institutionId);
  }

  @Query(() => [SubsidyByStatus])
  @UseGuards(PermissionsGuard)
  @Permission()
  async subsidyByStatus(
    @Args('institutionId', { type: () => String, nullable: true }) institutionId?: string,
  ): Promise<SubsidyByStatus[]> {
    const kpis = await this.subsidyRequestService.getSubsidyKPIs(institutionId);
    
    return [
      { status: 'Pending', count: kpis.pendingRequests, fill: '#f59e0b' },
      { status: 'In Review', count: kpis.inReviewRequests, fill: '#3b82f6' },
      { status: 'Approved', count: kpis.approvedRequests, fill: '#10b981' },
      { status: 'Rejected', count: kpis.rejectedRequests, fill: '#ef4444' },
      { status: 'Closed', count: kpis.closedRequests, fill: '#6b7280' }
    ];
  }
}
