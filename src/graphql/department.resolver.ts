import { Resolver, Query, Mutation, Args, Context, ResolveField, Parent } from '@nestjs/graphql';
import { DepartmentService } from '../services/department.service';
import { UserService } from '../services/user.service';
import { Department } from '../@generated/department/department.model';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { DepartmentCreateDto, DepartmentUpdateDto } from 'src/dto';
import { User } from 'src/@generated/user/user.model';
import { UserModel } from '../models/user.model';
import { AnnualBudget } from 'src/@generated/annual-budget/annual-budget.model';
import { DepartmentKPIs, DepartmentActivityData, DepartmentBudgetTimeline } from '../dto/department-analytics.dto';

@Resolver(() => Department)
@UseGuards(PermissionsGuard)
export class DepartmentResolver {
  constructor(
    private readonly departmentService: DepartmentService,
    private readonly userService: UserService,
  ) {}

  @Permission()
  @Query(() => [Department])
  async departments(
    @Args('institution_id', { nullable: true }) institution_id?: string
  ): Promise<Department[]> {
    if (institution_id) {
      return this.departmentService.getDepartmentsByInstitution(institution_id);
    }
    return this.departmentService.getDepartments();
  }

  @Permission()
  @Query(() => Department, { nullable: true })
  async department(@Args('id') id: string): Promise<Department | null> {
    return this.departmentService.getDepartmentById(id);
  }

  @Permission()
  @Mutation(() => Department)
  async createDepartment(
    @Args('data') data: DepartmentCreateDto,
    @Context() context: { userId: string }
  ): Promise<Department> {
    return this.departmentService.createDepartment(data, context.userId);
  }

  @Permission()
  @Mutation(() => Department)
  async updateDepartment(
    @Args('id') id: string,
    @Args('data') data: DepartmentUpdateDto,
    @Context() context: { userId: string }
  ): Promise<Department> {
    return this.departmentService.updateDepartment(id, data, context.userId);
  }

  @Permission()
  @Mutation(() => Department)
  async deleteDepartment(
    @Args('id') id: string,
    @Context() context: { userId: string }
  ): Promise<Department> {
    return this.departmentService.deleteDepartment(id, context.userId);
  }

  @ResolveField(() => [User])
  async users(@Parent() department: Department): Promise<User[]> {
    return this.departmentService.getUsersByDepartmentId(department.id);
  }

  @ResolveField(() => UserModel, { nullable: true })
  async leader(@Parent() department: Department): Promise<Omit<User, 'password'> | null> {
    return this.userService.getUserById(department.leader_id);
  }

  @ResolveField(() => [AnnualBudget], { name: 'annual_budgets' })
  async annualBudgets(@Parent() department: Department) {
    return await this.departmentService.getAnnualBudgetsByDepartmentId(department.id);
  }

  @Permission()
  @Query(() => DepartmentKPIs)
  async departmentKPIs(
    @Args('institution_id', { nullable: true }) institution_id?: string,
    @Args('church_id', { nullable: true }) church_id?: string,
    @Args('selectedYear', { nullable: true }) selectedYear?: number
  ): Promise<DepartmentKPIs> {
    return this.departmentService.getDepartmentKPIs(institution_id, church_id, selectedYear);
  }

  @Permission()
  @Query(() => [DepartmentActivityData])
  async departmentActivityData(
    @Args('institution_id', { nullable: true }) institution_id?: string,
    @Args('church_id', { nullable: true }) church_id?: string,
    @Args('selectedYear', { nullable: true }) selectedYear?: number
  ): Promise<DepartmentActivityData[]> {
    return this.departmentService.getDepartmentActivityData(institution_id, church_id, selectedYear);
  }

  @Permission()
  @Query(() => [DepartmentBudgetTimeline])
  async departmentBudgetTimeline(
    @Args('institution_id', { nullable: true }) institution_id?: string,
    @Args('church_id', { nullable: true }) church_id?: string,
    @Args('selectedYear', { nullable: true }) selectedYear?: number
  ): Promise<DepartmentBudgetTimeline[]> {
    return this.departmentService.getDepartmentBudgetTimeline(institution_id, church_id, selectedYear);
  }
}
