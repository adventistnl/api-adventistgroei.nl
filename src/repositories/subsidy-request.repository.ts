import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { SubsidyRequest } from '../@generated/subsidy-request/subsidy-request.model';
import { SubsidyRequestCreateDto, SubsidyRequestUpdateDto } from '../dto/subsidy-request.dto';
import { SubsidyActivityInput } from '../dto/subsidy-request.dto';

@Injectable()
export class SubsidyRequestRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: SubsidyRequestCreateDto, userId: string): Promise<SubsidyRequest> {
    const { institution_id, requester_id, department_id, church_id, subsidy_activities, ...rest } = data;

    const subsidyStatus = await this.prisma.subsidyStatus.create({
      data: {
        created_by: userId,
        updated_by: userId,
        department: { connect: { id: department_id } },
        assigned_user: { connect: { id: requester_id } },
        name: 'Initial status',
        description: 'Initial status upon subsidy request creation',
        order: 1,
      }
    })

    const subsidyRequest = await this.prisma.subsidyRequest.create({
      data: {
        ...rest,
        institution: { connect: { id: institution_id } },
        requester: { connect: { id: requester_id } },
        department: { connect: { id: department_id } },
        church: { connect: { id: church_id } },
        // projects: { connect:  [{ id: data.project_id }] },
        subsidy_status: { connect: { id: subsidyStatus.id } },
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });

    await Promise.all(
      subsidy_activities.map(async (activityData: SubsidyActivityInput) => {
         
        const { ...activityDataWithoutRequestId } = activityData;
        await this.prisma.subsidyActivity.create({
          data: {
            ...activityDataWithoutRequestId,
            created_by: userId,
            updated_by: userId,
            subsidy_request: { connect: { id: subsidyRequest.id } },
            subsidy_receipts: { create: [] }, //TODO: Implement subsidy receipts creation on subsidy request creation
          },
        });
      })
    );

    return subsidyRequest;
  }

  async update(id: string, data: SubsidyRequestUpdateDto, userId: string): Promise<SubsidyRequest> {
    return this.prisma.subsidyRequest.update({
      where: { id },
      data: {
        ...data,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<SubsidyRequest> {
    return this.prisma.subsidyRequest.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findById(id: string): Promise<SubsidyRequest | null> {
    return this.prisma.subsidyRequest.findUnique({
      where: { id, is_deleted: false },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof SubsidyRequest, any>>): Promise<SubsidyRequest[]> {
    const allowedKeys: (keyof SubsidyRequest)[] = ['institution_id', 'description', 'is_deleted', 'total_budget'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof SubsidyRequest)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.subsidyRequest.findMany({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findOneByFilters(filters: Partial<Record<keyof SubsidyRequest, any>>): Promise<SubsidyRequest | null> {
    const allowedKeys: (keyof SubsidyRequest)[] = ['institution_id', 'description', 'is_deleted', 'total_budget'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof SubsidyRequest)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.subsidyRequest.findFirst({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findAll(): Promise<SubsidyRequest[]> {
    return this.prisma.subsidyRequest.findMany({ where: { is_deleted: false } });
  }
}
