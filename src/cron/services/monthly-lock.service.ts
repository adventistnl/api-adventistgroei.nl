import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../../services/prisma.service';
import { MonthlyCloseService } from '../../services/monthly-close.service';

const REMINDER_DAYS_BEFORE_CLOSE = 3;

/** The month being closed on a given close day is always the next calendar month — a close day
 * of 10 in August closes September, matching R10's "day 10 of the month before the scheduled month". */
function targetMonthKey(now: Date): string {
  const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
  return `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, '0')}`;
}

/**
 * R10 — automatic monthly close. Runs daily; for each institution, checks its own configurable
 * close day (Setting key "monthly_close_day", default 10) and either sends pre-close reminders
 * a few days out or performs the close itself, delegating all the actual work to MonthlyCloseService.
 */
@Injectable()
export class MonthlyLockService {
  private readonly logger = new Logger(MonthlyLockService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly monthlyCloseService: MonthlyCloseService,
  ) {}

  @Cron('0 3 * * *') // Every day at 03:00
  async runDailyCheck(): Promise<void> {
    const now = new Date();
    const today = now.getUTCDate();
    const targetMonth = targetMonthKey(now);
    const institutions = await this.prisma.institution.findMany({ where: { is_deleted: false }, select: { id: true } });

    for (const institution of institutions) {
      try {
        const closeDay = await this.monthlyCloseService.getCloseDay(institution.id);
        if (today === closeDay) {
          const result = await this.monthlyCloseService.closeMonth(institution.id, targetMonth, 'system');
          this.logger.log(
            `Closed ${targetMonth} for institution ${institution.id}: ${result.autoAccepted} auto-accepted, ${result.locked} locked`,
          );
        } else if (today === closeDay - REMINDER_DAYS_BEFORE_CLOSE) {
          const openSlots = await this.monthlyCloseService.sendOpenSlotReminders(institution.id, targetMonth, 'system');
          const incomplete = await this.monthlyCloseService.sendIncompleteAvailabilityReminders(institution.id, targetMonth, 'system');
          this.logger.log(
            `Sent monthly-close reminders for ${targetMonth}, institution ${institution.id}: ${openSlots} open-slot, ${incomplete} incomplete-availability`,
          );
        }
      } catch (error) {
        this.logger.error(`Failed monthly-close check for institution ${institution.id}:`, error);
      }
    }
  }
}
