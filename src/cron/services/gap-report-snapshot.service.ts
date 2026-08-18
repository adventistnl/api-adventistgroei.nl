import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../../services/prisma.service';
import { GapReportService } from '../../services/gap-report.service';

function currentAndNextMonth(): string[] {
  const now = new Date();
  const current = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;
  const nextDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
  const next = `${nextDate.getUTCFullYear()}-${String(nextDate.getUTCMonth() + 1).padStart(2, '0')}`;
  return [current, next];
}

/**
 * R9 — the gap report is a daily-computed snapshot, never calculated at request time.
 * Recomputes the current and next month for every institution.
 */
@Injectable()
export class GapReportSnapshotService {
  private readonly logger = new Logger(GapReportSnapshotService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly gapReportService: GapReportService,
  ) {}

  @Cron('0 2 * * *') // Every day at 02:00
  async recomputeAllSnapshots(): Promise<void> {
    this.logger.log('Recomputing gap report snapshots');
    const institutions = await this.prisma.institution.findMany({ where: { is_deleted: false }, select: { id: true } });
    const months = currentAndNextMonth();

    let count = 0;
    for (const institution of institutions) {
      for (const month of months) {
        try {
          await this.gapReportService.computeAndStoreSnapshot(institution.id, month);
          count++;
        } catch (error) {
          this.logger.error(`Failed to compute gap report for institution ${institution.id}, month ${month}:`, error);
        }
      }
    }

    this.logger.log(`Recomputed ${count} gap report snapshot(s) across ${institutions.length} institution(s)`);
  }
}
