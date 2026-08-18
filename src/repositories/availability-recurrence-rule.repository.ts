import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { AvailabilityRecurrenceRule } from '../@generated/availability-recurrence-rule/availability-recurrence-rule.model';
import { SetAvailabilityRecurrenceRuleInput } from '../dto/availability-recurrence-rule.dto';

@Injectable()
export class AvailabilityRecurrenceRuleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByUser(userId: string): Promise<AvailabilityRecurrenceRule[]> {
    return this.prisma.availabilityRecurrenceRule.findMany({
      where: { user_id: userId, is_deleted: false },
      orderBy: { created_at: 'asc' },
    });
  }

  async findOwnById(id: string, userId: string): Promise<AvailabilityRecurrenceRule | null> {
    return this.prisma.availabilityRecurrenceRule.findFirst({
      where: { id, user_id: userId, is_deleted: false },
    });
  }

  async findAllActive(): Promise<AvailabilityRecurrenceRule[]> {
    return this.prisma.availabilityRecurrenceRule.findMany({
      where: { is_deleted: false, type: 'WEEKLY' },
    });
  }

  async create(params: {
    institutionId: string;
    userId: string;
    input: SetAvailabilityRecurrenceRuleInput;
  }): Promise<AvailabilityRecurrenceRule> {
    const { institutionId, userId, input } = params;

    return this.prisma.availabilityRecurrenceRule.create({
      data: {
        institution: { connect: { id: institutionId } },
        user: { connect: { id: userId } },
        type: input.type,
        status: input.status,
        day_of_week: input.day_of_week,
        start_date: input.start_date,
        end_date: input.end_date,
        // AvailabilityRecurrenceRuleService.validateInput() guarantees one of these is set
        // before this repository method is ever called.
        effective_from: (input.effective_from ?? input.start_date)!,
        effective_until: input.effective_until,
        note: input.note,
        created_by: userId,
        updated_by: userId,
      },
    });
  }

  async update(params: {
    id: string;
    userId: string;
    input: SetAvailabilityRecurrenceRuleInput;
  }): Promise<AvailabilityRecurrenceRule> {
    const { id, userId, input } = params;

    return this.prisma.availabilityRecurrenceRule.update({
      where: { id },
      data: {
        type: input.type,
        status: input.status,
        day_of_week: input.day_of_week,
        start_date: input.start_date,
        end_date: input.end_date,
        effective_from: (input.effective_from ?? input.start_date)!,
        effective_until: input.effective_until,
        note: input.note,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<void> {
    await this.prisma.availabilityRecurrenceRule.update({
      where: { id },
      data: { is_deleted: true, deleted_at: new Date(), deleted_by: userId, updated_by: userId },
    });
  }
}
