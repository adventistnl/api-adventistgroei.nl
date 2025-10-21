import { Resolver, Mutation, Args, Query, Context, ResolveField, Parent, Int } from '@nestjs/graphql';
import { InstitutionService } from '../services/institution.service';
import { Institution } from '../@generated/institution/institution.model';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { InstitutionCreateDto, InstitutionUpdateDto } from '../dto/institution.dto';
import { Church } from 'src/@generated/church/church.model';
import { Department } from 'src/@generated/department/department.model';
import { User } from 'src/@generated/user/user.model';
import { Communication } from 'src/@generated/communication/communication.model';
import { Notification } from 'src/@generated/notification/notification.model';
import { Setting } from 'src/@generated/setting/setting.model';
import { Project } from 'src/@generated/project/project.model';
import { DirectMessage } from 'src/@generated/direct-message/direct-message.model';
import { SubsidyRequest } from 'src/@generated/subsidy-request/subsidy-request.model';
import { Contact } from 'src/@generated/contact/contact.model';
import { AnnualBudget } from 'src/@generated/annual-budget/annual-budget.model';


@Resolver(() => Institution)
@UseGuards(PermissionsGuard)
export class InstitutionResolver {
  constructor(private readonly institutionService: InstitutionService) {}

  @Permission()
  @Mutation(() => Institution)
  async createInstitution(
    @Args('data') data: InstitutionCreateDto,
    @Context() context: { userId: string },
  ): Promise<Institution> {
    const userId = context.userId;
    return await this.institutionService.createInstitution(data, userId);
  }

  @Permission()
  @Query(() => [Institution])
  async institutions(): Promise<Institution[]> {
    return await this.institutionService.getInstitutions();
  }

  // @Permission()
  @Query(() => Institution, { nullable: true })
  async institution(@Args('id') id: string): Promise<Institution | null> {
    return await this.institutionService.getInstitutionById(id);
  }

  @Permission()
  @Mutation(() => Institution)
  async updateInstitution(
    @Args('data') data: InstitutionUpdateDto,
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Institution> {
    const userId = context.userId;
    return await this.institutionService.updateInstitution(id, data, userId);
  }

  @Permission()
  @Mutation(() => Institution)
  async deleteInstitution(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Institution> {
    const userId = context.userId;
    return await this.institutionService.deleteInstitution(id, userId);
  }

  @ResolveField(() => [Church])
  async churches(@Parent() institution: Institution) {
    return this.institutionService.getChurches(institution.id);
  }

  @ResolveField(() => [Department])
  async departments(@Parent() institution: Institution) {
    return this.institutionService.getDepartmentsByInstitutionId(institution.id);
  }

  @ResolveField(() => [User])
  async users(@Parent() institution: Institution) {
    return this.institutionService.getUsersByInstitutionId(institution.id);
  }

  @ResolveField(() => [Communication])
  async communications(@Parent() institution: Institution) {
    return await this.institutionService.getCommunicationsByInstitutionId(institution.id);
  }

  @ResolveField(() => [Notification])
  async notifications(@Parent() institution: Institution) {
    return await this.institutionService.getNotificationsByInstitutionId(institution.id);
  }

  @ResolveField(() => [Setting])
  async settings(@Parent() institution: Institution) {
    return await this.institutionService.getSettingsByInstitutionId(institution.id);
  }

  @ResolveField(() => [Project], { name: 'projects' })
  async projects(@Parent() institution: Institution) {
    return await this.institutionService.getProjectsByInstitutionId(institution.id);
  }

  @ResolveField(() => [DirectMessage], { name: 'direct_messages' })
  async directMessages(@Parent() institution: Institution) {
    return await this.institutionService.getDirectMessagesByInstitutionId(institution.id);
  }

  @ResolveField(() => [SubsidyRequest], { name: 'subsidy_requests' })
  async subsidyRequests(@Parent() institution: Institution) {
    return await this.institutionService.getSubsidyRequestsByInstitutionId(institution.id);
  }

  @ResolveField(() => Contact, { nullable: true })
  async contact(@Parent() institution: Institution) {
    return await this.institutionService.getContactByInstitutionId(institution.id);
  }

  @ResolveField(() => [AnnualBudget], { name: 'annual_budgets' })
  async annualBudgets(@Parent() institution: Institution) {
    return await this.institutionService.getAnnualBudgetByInstitutionId(institution.id);
  }

  @ResolveField(() => Int, { name: 'churches_count' })
  churchesCount(@Parent() institution: Institution) {
    return institution._count?.churches ?? 0;
  }

  @ResolveField(() => Int, { name: 'departments_count' })
  departmentsCount(@Parent() institution: Institution) {
    return institution._count?.departments ?? 0;
  }

  @ResolveField(() => Int, { name: 'users_count' })
  usersCount(@Parent() institution: Institution) {
    return institution._count?.users ?? 0;
  }
}
