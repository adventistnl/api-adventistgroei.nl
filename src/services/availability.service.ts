import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { AvailabilityRepository } from '../repositories/availability.repository';
import { UserRepository } from '../repositories/user.repository';
import { Availability } from '../@generated/availability/availability.model';
import { SetAvailabilityInput, SetAvailabilityBulkInput } from '../dto/availability.dto';

function parseMonth(month: string): { start: Date; end: Date } {
  const match = /^(\d{4})-(\d{2})$/.exec(month);
  if (!match) {
    throw new BadRequestException(`Invalid month "${month}", expected format "YYYY-MM"`);
  }
  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;
  return {
    start: new Date(Date.UTC(year, monthIndex, 1)),
    end: new Date(Date.UTC(year, monthIndex + 1, 1)),
  };
}

function eachDateInRange(start: Date, end: Date): Date[] {
  const dates: Date[] = [];
  let cursor = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
  const last = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate()));

  while (cursor <= last) {
    dates.push(cursor);
    cursor = new Date(Date.UTC(cursor.getUTCFullYear(), cursor.getUTCMonth(), cursor.getUTCDate() + 1));
  }
  return dates;
}

@Injectable()
export class AvailabilityService {
  constructor(
    private readonly availabilityRepository: AvailabilityRepository,
    private readonly userRepository: UserRepository,
  ) {}

  /** R2/R3 — every date in the requested month for the caller's own availability. */
  async myAvailability(userId: string, month: string): Promise<Availability[]> {
    const { start, end } = parseMonth(month);
    return this.availabilityRepository.findByUserAndMonth(userId, start, end);
  }

  /** R2/R11 — a preacher can only ever set their own availability. R13 — audit trail. */
  async setAvailability(input: SetAvailabilityInput, userId: string): Promise<Availability> {
    const institutionId = await this.resolveInstitutionId(userId);
    const before = await this.availabilityRepository.findOneForUser(userId, input.date);

    const result = await this.availabilityRepository.upsertManual({
      institutionId,
      userId,
      date: input.date,
      status: input.status,
      note: input.note,
    });

    await this.availabilityRepository.recordHistory({
      availabilityId: result.id,
      fieldName: 'status',
      oldValue: before?.status ?? null,
      newValue: input.status,
      changedBy: userId,
    });

    return result;
  }

  /** R2.1 — a one-off override across a date range (e.g. "unavailable this month"). */
  async setAvailabilityBulk(input: SetAvailabilityBulkInput, userId: string): Promise<Availability[]> {
    if (input.end_date < input.start_date) {
      throw new BadRequestException('end_date must not be before start_date');
    }

    const institutionId = await this.resolveInstitutionId(userId);
    const dates = eachDateInRange(input.start_date, input.end_date);
    const results: Availability[] = [];

    for (const date of dates) {
      const before = await this.availabilityRepository.findOneForUser(userId, date);
      const result = await this.availabilityRepository.upsertManual({
        institutionId,
        userId,
        date,
        status: input.status,
        note: input.note,
      });
      await this.availabilityRepository.recordHistory({
        availabilityId: result.id,
        fieldName: 'status',
        oldValue: before?.status ?? null,
        newValue: input.status,
        changedBy: userId,
      });
      results.push(result);
    }

    return results;
  }

  private async resolveInstitutionId(userId: string): Promise<string> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user.institution_id;
  }
}
