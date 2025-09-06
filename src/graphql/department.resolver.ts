import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { DepartmentService } from '../services/department.service';
import { Department } from '../@generated/department/department.model';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { DepartmentCreateDto, DepartmentUpdateDto } from 'src/dto';

@Resolver(() => Department)
@UseGuards(PermissionsGuard)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Permission()
  @Query(() => [Department])
  async departments(): Promise<Department[]> {
    return this.departmentService.getDepartments();
  }

  @Permission()
  @Query(() => Department, { nullable: true })
  async department(@Args('id') id: string): Promise<Department | null> {
    return this.departmentService.getDepartmentById(id);
  }

  @Permission()
  @Mutation(() => Department)
  async createDepartment(@Args('data') data: DepartmentCreateDto, @Context() context: { userId: string }): Promise<Department> {
    return this.departmentService.createDepartment(data, context.userId);
  }

  @Permission()
  @Mutation(() => Department)
  async updateDepartment(
    @Args('data') data: DepartmentUpdateDto,
    @Args('department_id') department_id: string,
    @Context() context: { userId: string }
  ): Promise<Department> {
    return this.departmentService.updateDepartment(department_id, data, context.userId);
  }

  @Permission()
  @Mutation(() => Department)
  async deleteDepartment(@Args('id') id: string): Promise<Department> {
    return this.departmentService.deleteDepartment(id);
  }
}
