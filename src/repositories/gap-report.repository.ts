import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { GapReportSnapshot } from '../@generated/gap-report-snapshot/gap-report-snapshot.model';
import { AssignmentStatus } from '../@generated/prisma/assignment-status.enum';
import { AvailabilityStatus } from '../@generated/prisma/availability-status.enum';

export interface ChurchGapEntryData {
  church_id: string;
  church_name: string;
  date: string;
}

export interface PreacherGapEntryData {
  user_id: string;
  user_name: string;
  date: string;
}

@Injectable()
export class GapReportRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findLatestSnapshot(institutionId: string, month: string): Promise<GapReportSnapshot | null> {
    return this.prisma.gapReportSnapshot.findUnique({
      where: { institution_id_month: { institution_id: institutionId, month } },
    });
  }

  async upsertSnapshot(params: {
    institutionId: string;
    month: string;
    churchesWithoutPreacher: ChurchGapEntryData[];
    preachersWithoutAssignment: PreacherGapEntryData[];
  }): Promise<void> {
    const { institutionId, month, churchesWithoutPreacher, preachersWithoutAssignment } = params;

    await this.prisma.gapReportSnapshot.upsert({
      where: { institution_id_month: { institution_id: institutionId, month } },
      create: {
        institution: { connect: { id: institutionId } },
        month,
        churches_without_preacher: churchesWithoutPreacher as any,
        preachers_without_assignment: preachersWithoutAssignment as any,
      },
      update: {
        churches_without_preacher: churchesWithoutPreacher as any,
        preachers_without_assignment: preachersWithoutAssignment as any,
        computed_at: new Date(),
      },
    });
  }

  /** R9(a) — every church with a scheduled service and no confirmed Assignment for that date. */
  async computeChurchesWithoutPreacher(institutionId: string, monthStart: Date, monthEnd: Date): Promise<ChurchGapEntryData[]> {
    const serviceDates = await this.prisma.churchServiceCalendar.findMany({
      where: { institution_id: institutionId, has_service: true, date: { gte: monthStart, lt: monthEnd } },
      include: { church: { select: { id: true, name: true } } },
    });

    const confirmedAssignments = await this.prisma.assignment.findMany({
      where: { institution_id: institutionId, status: AssignmentStatus.CONFIRMED, is_deleted: false, date: { gte: monthStart, lt: monthEnd } },
      select: { church_id: true, date: true },
    });
    const confirmedKeys = new Set(confirmedAssignments.map((a) => `${a.church_id}|${a.date.toISOString().slice(0, 10)}`));

    return serviceDates
      .filter((entry) => !confirmedKeys.has(`${entry.church_id}|${entry.date.toISOString().slice(0, 10)}`))
      .map((entry) => ({
        church_id: entry.church_id,
        church_name: entry.church.name,
        date: entry.date.toISOString().slice(0, 10),
      }));
  }

  /** R9(b) — every preacher with availability marked and no matching Assignment on that date. */
  async computePreachersWithoutAssignment(institutionId: string, monthStart: Date, monthEnd: Date): Promise<PreacherGapEntryData[]> {
    const availableDates = await this.prisma.availability.findMany({
      where: { institution_id: institutionId, status: AvailabilityStatus.AVAILABLE, is_deleted: false, date: { gte: monthStart, lt: monthEnd } },
      include: { user: { select: { id: true, name: true } } },
    });

    const confirmedAssignments = await this.prisma.assignment.findMany({
      where: { institution_id: institutionId, status: AssignmentStatus.CONFIRMED, is_deleted: false, user_id: { not: null }, date: { gte: monthStart, lt: monthEnd } },
      select: { user_id: true, date: true },
    });
    const confirmedKeys = new Set(confirmedAssignments.map((a) => `${a.user_id}|${a.date.toISOString().slice(0, 10)}`));

    return availableDates
      .filter((entry) => !confirmedKeys.has(`${entry.user_id}|${entry.date.toISOString().slice(0, 10)}`))
      .map((entry) => ({
        user_id: entry.user_id,
        user_name: entry.user.name,
        date: entry.date.toISOString().slice(0, 10),
      }));
  }
}
