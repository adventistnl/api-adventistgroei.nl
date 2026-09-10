import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Availability } from '../@generated/availability/availability.model';
import { AvailabilitySource } from '../@generated/prisma/availability-source.enum';
import { AvailabilityStatus } from '../@generated/prisma/availability-status.enum';

@Injectable()
export class AvailabilityRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByUserAndMonth(userId: string, monthStart: Date, monthEnd: Date): Promise<Availability[]> {
    return this.prisma.availability.findMany({
      where: {
        user_id: userId,
        is_deleted: false,
        date: { gte: monthStart, lt: monthEnd },
      },
      orderBy: { date: 'asc' },
    });
  }

  async findOneForUser(userId: string, date: Date): Promise<Availability | null> {
    return this.prisma.availability.findUnique({
      where: { user_id_date: { user_id: userId, date } },
    });
  }

  /**
   * Upserts the caller's own availability for a single date. Always sets source = MANUAL,
   * since a direct edit — from the calendar or a bulk range — always wins over whatever a
   * recurrence rule generated for that date (see Availability.source in schema.prisma).
   */
  async upsertManual(params: {
    institutionId: string;
    userId: string;
    date: Date;
    status: AvailabilityStatus;
    note?: string;
  }): Promise<Availability> {
    const { institutionId, userId, date, status, note } = params;

    return this.prisma.availability.upsert({
      where: { user_id_date: { user_id: userId, date } },
      create: {
        institution: { connect: { id: institutionId } },
        user: { connect: { id: userId } },
        date,
        status,
        source: AvailabilitySource.MANUAL,
        note,
        created_by: userId,
        updated_by: userId,
      },
      update: {
        status,
        source: AvailabilitySource.MANUAL,
        recurrence_rule: { disconnect: true },
        note,
        updated_by: userId,
      },
    });
  }

  /**
   * Upserts a rule-generated row for a date. Never overwrites a row whose source is MANUAL —
   * a direct edit on a specific date always takes precedence over the rule that would
   * otherwise cover it (see AvailabilityRecurrenceMaterializerService).
   */
  async upsertFromRule(params: {
    institutionId: string;
    userId: string;
    ruleId: string;
    date: Date;
    status: AvailabilityStatus;
  }): Promise<void> {
    const { institutionId, userId, ruleId, date, status } = params;
    const existing = await this.findOneForUser(userId, date);

    if (existing?.source === AvailabilitySource.MANUAL) {
      return;
    }

    await this.prisma.availability.upsert({
      where: { user_id_date: { user_id: userId, date } },
      create: {
        institution: { connect: { id: institutionId } },
        user: { connect: { id: userId } },
        recurrence_rule: { connect: { id: ruleId } },
        date,
        status,
        source: AvailabilitySource.RECURRENCE_RULE,
        created_by: userId,
        updated_by: userId,
      },
      update: {
        status,
        recurrence_rule: { connect: { id: ruleId } },
        source: AvailabilitySource.RECURRENCE_RULE,
        updated_by: userId,
      },
    });
  }

  /**
   * Soft-deletes every row still sourced from this rule (never touches rows a user has since
   * manually overridden) — used when a recurrence rule is deleted.
   */
  async softDeleteByRule(ruleId: string, userId: string): Promise<void> {
    await this.prisma.availability.updateMany({
      where: { recurrence_rule_id: ruleId, source: AvailabilitySource.RECURRENCE_RULE, is_deleted: false },
      data: { is_deleted: true, deleted_at: new Date(), deleted_by: userId, updated_by: userId },
    });
  }

  /** R13 — audit trail for every availability state change, regardless of source. */
  async recordHistory(params: {
    availabilityId: string;
    fieldName: string;
    oldValue: string | null;
    newValue: string | null;
    changedBy: string;
  }): Promise<void> {
    await this.prisma.availabilityHistory.create({
      data: {
        availability_id: params.availabilityId,
        field_name: params.fieldName,
        old_value: params.oldValue,
        new_value: params.newValue,
        changed_by: params.changedBy,
      },
    });
  }
}
