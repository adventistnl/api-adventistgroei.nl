import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { AssignmentRequest } from '../@generated/assignment-request/assignment-request.model';
import { RequestStatus } from '../@generated/prisma/request-status.enum';
import { RequestType } from '../@generated/prisma/request-type.enum';

@Injectable()
export class AssignmentRequestRepository {
  constructor(private readonly prisma: PrismaService) {}

  /** Requests directed at or initiated by this preacher — user_id always refers to the preacher. */
  async findByUser(userId: string): Promise<AssignmentRequest[]> {
    return this.prisma.assignmentRequest.findMany({
      where: { user_id: userId, is_deleted: false },
      orderBy: { created_at: 'desc' },
      include: { church: true, user: true, template: true, institution: true },
    });
  }

  async findPendingForSlot(churchId: string, date: Date): Promise<AssignmentRequest[]> {
    return this.prisma.assignmentRequest.findMany({
      where: { church_id: churchId, date, status: RequestStatus.PENDING, is_deleted: false },
    });
  }

  async findById(id: string): Promise<AssignmentRequest | null> {
    return this.prisma.assignmentRequest.findUnique({ where: { id } });
  }

  async create(params: {
    institutionId: string;
    churchId: string;
    date: Date;
    userId: string;
    type: RequestType;
    templateId?: string;
    actorId: string;
  }): Promise<AssignmentRequest> {
    return this.prisma.assignmentRequest.create({
      data: {
        institution: { connect: { id: params.institutionId } },
        church: { connect: { id: params.churchId } },
        date: params.date,
        user: { connect: { id: params.userId } },
        type: params.type,
        template: params.templateId ? { connect: { id: params.templateId } } : undefined,
        created_by: params.actorId,
        updated_by: params.actorId,
      },
      include: { church: true, user: true, template: true, institution: true },
    });
  }

  async updateStatus(id: string, status: RequestStatus, actorId: string): Promise<AssignmentRequest> {
    return this.prisma.assignmentRequest.update({
      where: { id },
      data: { status, decided_at: new Date(), updated_by: actorId },
      include: { church: true, user: true, template: true, institution: true },
    });
  }

  /** R7 — every other pending request for the same slot is marked superseded once one is accepted. */
  async supersedeOthers(churchId: string, date: Date, exceptId: string, actorId: string): Promise<void> {
    await this.prisma.assignmentRequest.updateMany({
      where: { church_id: churchId, date, status: RequestStatus.PENDING, id: { not: exceptId } },
      data: { status: RequestStatus.SUPERSEDED, decided_at: new Date(), updated_by: actorId },
    });
  }
}
