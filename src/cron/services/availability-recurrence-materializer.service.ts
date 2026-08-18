import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AvailabilityRecurrenceRule } from '../../@generated/availability-recurrence-rule/availability-recurrence-rule.model';
import { RecurrenceType } from '../../@generated/prisma/recurrence-type.enum';
import { AvailabilityStatus } from '../../@generated/prisma/availability-status.enum';
import { AvailabilityRecurrenceRuleRepository } from '../../repositories/availability-recurrence-rule.repository';
import { AvailabilityRepository } from '../../repositories/availability.repository';

const MATERIALIZATION_HORIZON_MONTHS = 12;

function utcMidnight(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function addMonthsUTC(date: Date, months: number): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + months, date.getUTCDate()));
}

function addDaysUTC(date: Date, days: number): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + days));
}

/**
 * Turns AvailabilityRecurrenceRule "generators" (R2.1) into concrete, per-date Availability
 * rows. Everything downstream (gap report, overview grid, invite eligibility) only ever reads
 * Availability rows and never needs to understand rules — this is the only place that does.
 */
@Injectable()
export class AvailabilityRecurrenceMaterializerService {
  private readonly logger = new Logger(AvailabilityRecurrenceMaterializerService.name);

  constructor(
    private readonly ruleRepository: AvailabilityRecurrenceRuleRepository,
    private readonly availabilityRepository: AvailabilityRepository,
  ) {}

  async materializeRule(rule: AvailabilityRecurrenceRule): Promise<void> {
    if (rule.type === RecurrenceType.DATE_RANGE) {
      await this.materializeDateRange(rule);
    } else {
      await this.materializeWeekly(rule);
    }
  }

  private async materializeDateRange(rule: AvailabilityRecurrenceRule): Promise<void> {
    if (!rule.start_date || !rule.end_date) return;

    let cursor = utcMidnight(new Date(rule.start_date));
    const end = utcMidnight(new Date(rule.end_date));

    while (cursor <= end) {
      await this.availabilityRepository.upsertFromRule({
        institutionId: rule.institution_id,
        userId: rule.user_id,
        ruleId: rule.id,
        date: cursor,
        status: rule.status as AvailabilityStatus,
      });
      cursor = addDaysUTC(cursor, 1);
    }
  }

  private async materializeWeekly(rule: AvailabilityRecurrenceRule): Promise<void> {
    if (rule.day_of_week === null || rule.day_of_week === undefined) return;

    const today = utcMidnight(new Date());
    const effectiveFrom = utcMidnight(new Date(rule.effective_from));
    const horizonStart = effectiveFrom > today ? effectiveFrom : today;

    const rollingHorizonEnd = addMonthsUTC(today, MATERIALIZATION_HORIZON_MONTHS);
    const ruleEnd = rule.effective_until ? utcMidnight(new Date(rule.effective_until)) : rollingHorizonEnd;
    const horizonEnd = ruleEnd < rollingHorizonEnd ? ruleEnd : rollingHorizonEnd;

    if (horizonStart > horizonEnd) return;

    let cursor = horizonStart;
    while (cursor <= horizonEnd) {
      if (cursor.getUTCDay() === rule.day_of_week) {
        await this.availabilityRepository.upsertFromRule({
          institutionId: rule.institution_id,
          userId: rule.user_id,
          ruleId: rule.id,
          date: cursor,
          status: rule.status as AvailabilityStatus,
        });
      }
      cursor = addDaysUTC(cursor, 1);
    }
  }

  /**
   * Runs monthly so every active WEEKLY rule's rolling 12-month horizon keeps extending
   * forward as time passes. DATE_RANGE rules are already fully bounded at creation time and
   * don't need this — findAllActive() only returns WEEKLY rules.
   */
  @Cron('0 3 1 * *') // 1st of every month at 03:00
  async extendActiveRules(): Promise<void> {
    this.logger.log('Extending materialization horizon for active weekly availability rules');
    const rules = await this.ruleRepository.findAllActive();

    for (const rule of rules) {
      try {
        await this.materializeRule(rule);
      } catch (error) {
        this.logger.error(`Failed to extend rule ${rule.id}:`, error);
      }
    }

    this.logger.log(`Extended ${rules.length} active weekly availability rule(s)`);
  }
}
