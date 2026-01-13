import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../../services/prisma.service';
import { ProjectStatus } from '../../@generated/prisma/project-status.enum';

@Injectable()
export class ProjectExpirationService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Runs daily at 01:00 to check for expired projects.
   * Updates status to EXPIRED for projects where:
   * - end_at < now
   * - status is NOT CONCLUDED or EXPIRED
   * - is_deleted = false
   */
  @Cron('0 1 * * *') // Every day at 01:00
  async checkExpiredProjects() {
    const now = new Date();
    console.info(`🔍 [ProjectExpiration] Checking for expired projects at: ${now.toISOString()}`);

    try {
      const result = await this.prisma.project.updateMany({
        where: {
          end_at: { lt: now },
          status: {
            notIn: [ProjectStatus.CONCLUDED, ProjectStatus.EXPIRED],
          },
          is_deleted: false,
        },
        data: {
          status: ProjectStatus.EXPIRED,
          updated_at: now,
        },
      });

      console.info(`✅ [ProjectExpiration] Marked ${result.count} projects as EXPIRED`);
    } catch (error) {
      console.error('❌ [ProjectExpiration] Error checking expired projects:', error);
    }
  }
}
