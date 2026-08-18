import { Injectable, BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { ChurchServiceCalendarRepository } from '../repositories/church-service-calendar.repository';
import { ChurchRepository } from '../repositories/church.repository';
import { ChurchServiceCalendar } from '../@generated/church-service-calendar/church-service-calendar.model';
import { SetServiceCalendarInput, SetServiceCalendarBulkInput } from '../dto/church-service-calendar.dto';

const MAX_HORIZON_MONTHS = 12;

function utcMidnight(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function addMonthsUTC(date: Date, months: number): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + months, date.getUTCDate()));
}

function addDaysUTC(date: Date, days: number): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + days));
}

function parseMonth(month: string): { start: Date; end: Date } {
  const match = /^(\d{4})-(\d{2})$/.exec(month);
  if (!match) {
    throw new BadRequestException(`Invalid month "${month}", expected format "YYYY-MM"`);
  }
  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;
  return { start: new Date(Date.UTC(year, monthIndex, 1)), end: new Date(Date.UTC(year, monthIndex + 1, 1)) };
}

/** Every date matching day_of_week between effectiveFrom and the earlier of effectiveUntil / a 12-month horizon. */
function datesForWeeklyPattern(dayOfWeek: number, effectiveFrom: Date, effectiveUntil?: Date): Date[] {
  const start = utcMidnight(effectiveFrom);
  const horizonEnd = addMonthsUTC(start, MAX_HORIZON_MONTHS);
  const end = effectiveUntil && utcMidnight(effectiveUntil) < horizonEnd ? utcMidnight(effectiveUntil) : horizonEnd;

  const dates: Date[] = [];
  let cursor = start;
  while (cursor <= end) {
    if (cursor.getUTCDay() === dayOfWeek) dates.push(cursor);
    cursor = addDaysUTC(cursor, 1);
  }
  return dates;
}

@Injectable()
export class ChurchServiceCalendarService {
  constructor(
    private readonly repository: ChurchServiceCalendarRepository,
    private readonly churchRepository: ChurchRepository,
  ) {}

  async churchServiceCalendar(churchId: string, month: string): Promise<ChurchServiceCalendar[]> {
    const { start, end } = parseMonth(month);
    return this.repository.findByChurchAndMonth(churchId, start, end);
  }

  /** R1/R11 — only the church's own leader can set its calendar directly. */
  async setChurchServiceCalendar(input: SetServiceCalendarInput, userId: string): Promise<ChurchServiceCalendar[]> {
    const church = await this.churchRepository.findById(input.church_id);
    if (!church) {
      throw new NotFoundException('Church not found');
    }
    if (church.leader_id !== userId) {
      throw new ForbiddenException('You can only set the service calendar for a church you lead');
    }

    const dates = this.resolveDates(input);
    const results: ChurchServiceCalendar[] = [];
    for (const date of dates) {
      results.push(
        await this.repository.upsertConfirmed({
          institutionId: church.institution_id,
          churchId: church.id,
          date,
          hasService: input.has_service,
          userId,
        }),
      );
    }
    return results;
  }

  /** R8.1 — admin/department-leader bulk pattern across many churches; never overwrites a confirmed date. */
  async setChurchServiceCalendarBulk(input: SetServiceCalendarBulkInput, userId: string): Promise<ChurchServiceCalendar[]> {
    const dates = datesForWeeklyPattern(input.day_of_week, input.effective_from, input.effective_until);
    const results: ChurchServiceCalendar[] = [];

    for (const churchId of input.church_ids) {
      const church = await this.churchRepository.findById(churchId);
      if (!church) continue;

      for (const date of dates) {
        await this.repository.upsertBulkDefault({
          institutionId: church.institution_id,
          churchId: church.id,
          date,
          hasService: input.has_service,
          userId,
        });
      }
      const applied = await this.repository.findByChurchAndMonth(
        churchId,
        utcMidnight(input.effective_from),
        addMonthsUTC(utcMidnight(input.effective_from), MAX_HORIZON_MONTHS),
      );
      results.push(...applied);
    }

    return results;
  }

  private resolveDates(input: SetServiceCalendarInput): Date[] {
    if (input.date) {
      return [utcMidnight(input.date)];
    }
    if (input.day_of_week !== undefined && input.day_of_week !== null && input.effective_from) {
      return datesForWeeklyPattern(input.day_of_week, input.effective_from, input.effective_until);
    }
    throw new BadRequestException('Provide either "date" (a single exception) or "day_of_week" + "effective_from" (a weekly pattern)');
  }
}
