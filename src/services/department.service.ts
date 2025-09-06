import { Injectable } from '@nestjs/common';
import { DepartmentRepository } from '../repositories/department.repository';
import { Department } from '../@generated/department/department.model';
import { DepartmentCreateDto, DepartmentUpdateDto } from '../dto/department.dto';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';

@Injectable()
export class DepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  async getDepartments(): Promise<Department[]> {
    return this.departmentRepository.findAll();
  }

  async getDepartmentById(id: string): Promise<Department> {
    const department = await this.departmentRepository.findById(id);
    if (!department) {
      throw new CustomGraphQLError('Department not found', ErrorCode.NOT_FOUND, 404);
    }
    return department;
  }

  async createDepartment(data: DepartmentCreateDto, userId: string): Promise<Department> {
    return this.departmentRepository.create(data, userId);
  }

  async updateDepartment(department_id: string, data: DepartmentUpdateDto, userId: string): Promise<Department> {
    return this.departmentRepository.update(department_id, data, userId);
  }

  async deleteDepartment(id: string): Promise<Department> {
    return this.departmentRepository.delete(id);
  }
}
