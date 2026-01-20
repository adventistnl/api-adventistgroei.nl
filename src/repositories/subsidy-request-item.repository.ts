import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { SubsidyRequestItem } from '../@generated/subsidy-request-item/subsidy-request-item.model';
import { SubsidyRequestItemInput } from '../dto/subsidy-request-item.dto';

@Injectable()
export class SubsidyRequestItemRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createMany(subsidyRequestId: string, items: SubsidyRequestItemInput[]): Promise<void> {
    await this.prisma.subsidyRequestItem.createMany({
      data: items.map(item => ({
        subsidy_request_id: subsidyRequestId,
        project_activity_id: item.project_activity_id,
        requested_amount: item.requested_amount,
        notes: item.notes,
      })),
    });
  }

  async softDeleteBySubsidyRequestId(subsidyRequestId: string, userId: string): Promise<void> {
    // SOFT DELETE: marcar is_deleted=true ao invés de deletar fisicamente
    await this.prisma.subsidyRequestItem.updateMany({
      where: {
        subsidy_request_id: subsidyRequestId,
        is_deleted: false, // Apenas items ainda não deletados
      },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
      },
    });
  }

  async deleteBySubsidyRequestId(subsidyRequestId: string): Promise<void> {
    // HARD DELETE: usado apenas para update (deletar para recriar)
    await this.prisma.subsidyRequestItem.deleteMany({
      where: { subsidy_request_id: subsidyRequestId },
    });
  }

  async findBySubsidyRequestId(subsidyRequestId: string): Promise<SubsidyRequestItem[]> {
    return this.prisma.subsidyRequestItem.findMany({
      where: {
        subsidy_request_id: subsidyRequestId,
        is_deleted: false, // Buscar apenas não deletados
      },
      include: {
        project_activity: {
          include: {
            activity_documents: true,
          },
        },
      },
    });
  }

  /**
   * Find all subsidy requests that have items linked to a specific activity
   */
  async findSubsidyRequestsByActivityId(activityId: string): Promise<string[]> {
    const items = await this.prisma.subsidyRequestItem.findMany({
      where: {
        project_activity_id: activityId,
        is_deleted: false,
      },
      select: {
        subsidy_request_id: true,
      },
      distinct: ['subsidy_request_id'],
    });

    return items.map(item => item.subsidy_request_id);
  }
}
