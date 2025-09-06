import { Injectable } from '@nestjs/common';
import { DepartmentRepository } from '../repositories/department.repository';
import { Department } from '../@generated/department/department.model';
import { DepartmentCreateDto, DepartmentUpdateDto } from '../dto/department.dto';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { transformToDecimal } from 'prisma-graphql-type-decimal';

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

  async createDepartment(data: DepartmentCreateDto): Promise<Department> {
    const createData = {
      ...data,
      annual_budget: transformToDecimal(data.annual_budget),
      institution: { connect: { id: data.institution } },
      church: { connect: { id: data.church } },
    };
    return this.departmentRepository.create(createData);
  }

  async updateDepartment(data: DepartmentUpdateDto): Promise<Department> {
    const { id, ...updateData } = data;
    const prismaUpdateData = {
      name: updateData.name ? { set: updateData.name } : undefined,
      description: updateData.description ? { set: updateData.description } : undefined,
      annual_budget: updateData.annual_budget ? { set: transformToDecimal(updateData.annual_budget) } : undefined,
    };
    return this.departmentRepository.update(id, prismaUpdateData);
  }

  async deleteDepartment(id: string): Promise<Department> {
    return this.departmentRepository.delete(id);
  }
}
