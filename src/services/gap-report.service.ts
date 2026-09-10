import { Injectable, NotFoundException } from '@nestjs/common';
import { GapReportRepository, ChurchGapEntryData, PreacherGapEntryData } from '../repositories/gap-report.repository';
import { UserRepository } from '../repositories/user.repository';
import { GapReport } from '../dto/gap-report.dto';

function monthRange(month: string): { start: Date; end: Date } {
  const [year, monthNum] = month.split('-').map(Number);
  return { start: new Date(Date.UTC(year, monthNum - 1, 1)), end: new Date(Date.UTC(year, monthNum, 1)) };
}

@Injectable()
export class GapReportService {
  constructor(
    private readonly gapReportRepository: GapReportRepository,
    private readonly userRepository: UserRepository,
  ) {}

  /** R9 — always reads the latest daily-computed snapshot, never computes at request time. */
  async gapReport(userId: string, month: string): Promise<GapReport> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new NotFoundException('User not found');

    const snapshot = await this.gapReportRepository.findLatestSnapshot(user.institution_id, month);
    if (!snapshot) {
      return { month, churchesWithoutPreacher: [], preachersWithoutAssignment: [], computedAt: new Date(0) };
    }

    const churches = snapshot.churches_without_preacher as unknown as ChurchGapEntryData[];
    const preachers = snapshot.preachers_without_assignment as unknown as PreacherGapEntryData[];

    return {
      month,
      churchesWithoutPreacher: churches.map((c) => ({ churchId: c.church_id, churchName: c.church_name, date: new Date(c.date) })),
      preachersWithoutAssignment: preachers.map((p) => ({ userId: p.user_id, userName: p.user_name, date: new Date(p.date) })),
      computedAt: snapshot.computed_at,
    };
  }

  /** Called by the daily cron job — see gap-report-snapshot.service.ts. */
  async computeAndStoreSnapshot(institutionId: string, month: string): Promise<void> {
    const { start, end } = monthRange(month);
    const [churchesWithoutPreacher, preachersWithoutAssignment] = await Promise.all([
      this.gapReportRepository.computeChurchesWithoutPreacher(institutionId, start, end),
      this.gapReportRepository.computePreachersWithoutAssignment(institutionId, start, end),
    ]);

    await this.gapReportRepository.upsertSnapshot({ institutionId, month, churchesWithoutPreacher, preachersWithoutAssignment });
  }
}
