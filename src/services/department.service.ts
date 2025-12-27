import { Injectable } from '@nestjs/common';
import { DepartmentRepository } from '../repositories/department.repository';
import { Department } from '../@generated/department/department.model';
import { DepartmentCreateDto, DepartmentUpdateDto } from '../dto/department.dto';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { DepartmentKPIs, DepartmentActivityData, DepartmentBudgetTimeline } from '../dto/department-analytics.dto';

@Injectable()
export class DepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  async getDepartments(): Promise<Department[]> {
    return this.departmentRepository.findAll();
  }

  async getDepartmentsByInstitution(institution_id: string): Promise<Department[]> {
    return this.departmentRepository.findByInstitution(institution_id);
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

  async updateDepartment(departmentId: string, data: DepartmentUpdateDto, userId: string): Promise<Department> {
    return this.departmentRepository.update(departmentId, data, userId);
  }

  async deleteDepartment(id: string, userId: string): Promise<Department> {
    return this.departmentRepository.softDelete(id, userId);
  }

  async getUsersByDepartmentId(departmentId: string): Promise<any[]> {
    return this.departmentRepository.getUsersByDepartmentId(departmentId);
  }

  async getDepartmentKPIs(institution_id?: string, church_id?: string, selectedYear?: number): Promise<DepartmentKPIs> {
    return this.departmentRepository.getDepartmentKPIs(institution_id, church_id, selectedYear);
  }

  async getDepartmentActivityData(institution_id?: string, church_id?: string, selectedYear?: number): Promise<DepartmentActivityData[]> {
    return this.departmentRepository.getDepartmentActivityData(institution_id, church_id, selectedYear);
  }

  async getDepartmentBudgetTimeline(institution_id?: string, church_id?: string, selectedYear?: number): Promise<DepartmentBudgetTimeline[]> {
    return this.departmentRepository.getDepartmentBudgetTimeline(institution_id, church_id, selectedYear);
  }
}
