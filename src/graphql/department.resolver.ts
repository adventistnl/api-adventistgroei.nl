import { Resolver, Query, Mutation, Args, Context, ResolveField, Parent } from '@nestjs/graphql';
import { DepartmentService } from '../services/department.service';
import { Department } from '../@generated/department/department.model';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { DepartmentCreateDto, DepartmentUpdateDto } from 'src/dto';
import { User } from 'src/@generated/user/user.model';

@Resolver(() => Department)
@UseGuards(PermissionsGuard)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

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
}
