import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DepartmentService } from '../services/department.service';
import { Department } from '../@generated/department/department.model';
import { DepartmentCreateDto, DepartmentUpdateDto } from '../dto/department.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';

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
  async createDepartment(@Args('data') data: DepartmentCreateDto): Promise<Department> {
    return this.departmentService.createDepartment(data);
  }

  @Permission()
  @Mutation(() => Department)
  async updateDepartment(@Args('data') data: DepartmentUpdateDto): Promise<Department> {
    return this.departmentService.updateDepartment(data);
  }

  @Permission()
  @Mutation(() => Department)
  async deleteDepartment(@Args('id') id: string): Promise<Department> {
    return this.departmentService.deleteDepartment(id);
  }
}
