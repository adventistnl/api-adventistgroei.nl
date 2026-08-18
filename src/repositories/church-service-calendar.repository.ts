import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ChurchServiceCalendar } from '../@generated/church-service-calendar/church-service-calendar.model';
import { ServiceCalendarSource } from '../@generated/prisma/service-calendar-source.enum';

@Injectable()
export class ChurchServiceCalendarRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByChurchAndMonth(churchId: string, monthStart: Date, monthEnd: Date): Promise<ChurchServiceCalendar[]> {
    return this.prisma.churchServiceCalendar.findMany({
      where: { church_id: churchId, date: { gte: monthStart, lt: monthEnd } },
      orderBy: { date: 'asc' },
    });
  }

  async findOne(churchId: string, date: Date): Promise<ChurchServiceCalendar | null> {
    return this.prisma.churchServiceCalendar.findUnique({
      where: { church_id_date: { church_id: churchId, date } },
    });
  }

  /** Used by the church's own leader — always confirmed, always wins over a bulk default. */
  async upsertConfirmed(params: {
    institutionId: string;
    churchId: string;
    date: Date;
    hasService: boolean;
    userId: string;
  }): Promise<ChurchServiceCalendar> {
    const { institutionId, churchId, date, hasService, userId } = params;

    return this.prisma.churchServiceCalendar.upsert({
      where: { church_id_date: { church_id: churchId, date } },
      create: {
        institution: { connect: { id: institutionId } },
        church: { connect: { id: churchId } },
        date,
        has_service: hasService,
        source: ServiceCalendarSource.CHURCH_CONFIRMED,
        created_by: userId,
        updated_by: userId,
      },
      update: {
        has_service: hasService,
        source: ServiceCalendarSource.CHURCH_CONFIRMED,
        updated_by: userId,
      },
    });
  }

  /**
   * Used by an admin/department-leader bulk pattern (R8.1). Never overwrites a date the
   * church's own leader already confirmed.
   */
  async upsertBulkDefault(params: {
    institutionId: string;
    churchId: string;
    date: Date;
    hasService: boolean;
    userId: string;
  }): Promise<void> {
    const { institutionId, churchId, date, hasService, userId } = params;
    const existing = await this.findOne(churchId, date);

    if (existing?.source === ServiceCalendarSource.CHURCH_CONFIRMED) {
      return;
    }

    await this.prisma.churchServiceCalendar.upsert({
      where: { church_id_date: { church_id: churchId, date } },
      create: {
        institution: { connect: { id: institutionId } },
        church: { connect: { id: churchId } },
        date,
        has_service: hasService,
        source: ServiceCalendarSource.BULK_DEFAULT,
        created_by: userId,
        updated_by: userId,
      },
      update: {
        has_service: hasService,
        source: ServiceCalendarSource.BULK_DEFAULT,
        updated_by: userId,
      },
    });
  }
}
