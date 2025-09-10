import { Injectable } from '@nestjs/common';
import { SubsidyStatus } from '../@generated/subsidy-status/subsidy-status.model';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services';
import { CreateSubsidyStatusDto } from 'src/dto/subsidy-status.dto';

@Injectable()
export class SubsidyStatusRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSubsidyStatusDto, userId: string): Promise<SubsidyStatus> {
    const { assigned_to, department_id, ...rest } = data;
    return this.prisma.subsidyStatus.create({ data: { 
      ...rest,
      assigned_user: { connect: { id: assigned_to } },
      department: { connect: { id: department_id } },
      created_by: userId,
      updated_by: userId
    } });
  }

  async findById(id: string): Promise<SubsidyStatus | null> {
    return this.prisma.subsidyStatus.findUnique({ where: { id, is_deleted: false } });
  }

  async findManyByFilters(filters: Partial<Record<keyof SubsidyStatus, any>>): Promise<SubsidyStatus[]> {
    const allowedKeys: (keyof SubsidyStatus)[] = ['id', 'department_id', 'assigned_to', 'name', 'is_deleted'];
    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof SubsidyStatus)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }
    return this.prisma.subsidyStatus.findMany({
      where: { ...filters, is_deleted: false },
    });
  }

  async update(id: string, data: Prisma.SubsidyStatusUpdateInput): Promise<SubsidyStatus> {
    return this.prisma.subsidyStatus.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: string, userId: string): Promise<SubsidyStatus> {
    return this.prisma.subsidyStatus.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
      },
    });
  }
}
