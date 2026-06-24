import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../../services/prisma.service';
import { ProjectStatus } from '../../@generated/prisma/project-status.enum';
import { ProjectService } from '../../services/project.service';

@Injectable()
export class ProjectExpirationService {
  private readonly logger = new Logger(ProjectExpirationService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly projectService: ProjectService
  ) {}

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
    this.logger.log(`🔍 [ProjectExpiration] Checking for expired projects at: ${now.toISOString()}`);

    try {
      const expiredProjects = await this.prisma.project.findMany({
        where: {
          end_at: { lt: now },
          status: {
            notIn: [ProjectStatus.CONCLUDED, ProjectStatus.EXPIRED],
          },
          is_deleted: false,
        },
      });

      if (expiredProjects.length === 0) {
        this.logger.log(`✅ [ProjectExpiration] No expired projects found`);
        return;
      }

      let updatedCount = 0;
      for (const project of expiredProjects) {
        try {
          // Use ProjectService to ensure history event is created and notifications are dispatched
          await this.projectService.update(
            project.id,
            { status: ProjectStatus.EXPIRED },
            'system'
          );
          updatedCount++;
        } catch (err) {
          this.logger.error(`Failed to expire project ${project.id}:`, err);
        }
      }

      this.logger.log(`✅ [ProjectExpiration] Marked ${updatedCount} projects as EXPIRED`);
    } catch (error) {
      this.logger.error('❌ [ProjectExpiration] Error checking expired projects:', error);
    }
  }
}
