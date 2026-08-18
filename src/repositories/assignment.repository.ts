import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Assignment } from '../@generated/assignment/assignment.model';
import { AssignmentOrigin } from '../@generated/prisma/assignment-origin.enum';
import { AssignmentStatus } from '../@generated/prisma/assignment-status.enum';

@Injectable()
export class AssignmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByInstitutionAndMonth(institutionId: string, monthStart: Date, monthEnd: Date): Promise<Assignment[]> {
    return this.prisma.assignment.findMany({
      where: { institution_id: institutionId, is_deleted: false, date: { gte: monthStart, lt: monthEnd } },
      orderBy: [{ date: 'asc' }],
    });
  }

  async findConfirmedByInstitutionAndRange(institutionId: string, start: Date, end: Date): Promise<Assignment[]> {
    return this.prisma.assignment.findMany({
      where: {
        institution_id: institutionId,
        is_deleted: false,
        status: AssignmentStatus.CONFIRMED,
        date: { gte: start, lt: end },
      },
    });
  }

  async findOne(churchId: string, date: Date): Promise<Assignment | null> {
    return this.prisma.assignment.findUnique({ where: { church_id_date: { church_id: churchId, date } } });
  }

  async upsert(params: {
    institutionId: string;
    churchId: string;
    date: Date;
    userId: string | null;
    status: AssignmentStatus;
    origin: AssignmentOrigin;
    actorId: string;
  }): Promise<Assignment> {
    const { institutionId, churchId, date, userId, status, origin, actorId } = params;

    return this.prisma.assignment.upsert({
      where: { church_id_date: { church_id: churchId, date } },
      create: {
        institution: { connect: { id: institutionId } },
        church: { connect: { id: churchId } },
        date,
        user: userId ? { connect: { id: userId } } : undefined,
        status,
        origin,
        created_by: actorId,
        updated_by: actorId,
      },
      update: {
        user: userId ? { connect: { id: userId } } : { disconnect: true },
        status,
        origin,
        updated_by: actorId,
      },
    });
  }

  /** R13 — audit trail for every assignment state change. */
  async recordHistory(params: {
    assignmentId: string;
    fieldName: string;
    oldValue: string | null;
    newValue: string | null;
    changedBy: string;
  }): Promise<void> {
    await this.prisma.assignmentHistory.create({
      data: {
        assignment_id: params.assignmentId,
        field_name: params.fieldName,
        old_value: params.oldValue,
        new_value: params.newValue,
        changed_by: params.changedBy,
      },
    });
  }
}
