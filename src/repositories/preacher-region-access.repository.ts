import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { PreacherRegionAccess } from '../@generated/preacher-region-access/preacher-region-access.model';

@Injectable()
export class PreacherRegionAccessRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByUser(userId: string): Promise<PreacherRegionAccess[]> {
    return this.prisma.preacherRegionAccess.findMany({ where: { user_id: userId }, include: { region: true, user: true, institution: true } });
  }

  /**
   * R6 — a preacher's eligible region ids: their home church's region, plus every region
   * granted via PreacherRegionAccess. Granting one row per institution region is how "national"
   * reach is expressed — there's no separate scope_level flag (see 01-corrected-blueprint.md §3 R6).
   */
  async findEligibleRegionIds(userId: string): Promise<Set<string>> {
    const [user, grants] = await Promise.all([
      this.prisma.user.findUnique({ where: { id: userId }, select: { church: { select: { region_id: true } } } }),
      this.prisma.preacherRegionAccess.findMany({ where: { user_id: userId }, select: { region_id: true } }),
    ]);

    const regionIds = new Set<string>(grants.map((g) => g.region_id));
    if (user?.church?.region_id) {
      regionIds.add(user.church.region_id);
    }
    return regionIds;
  }

  async grant(params: { institutionId: string; userId: string; regionId: string; actorId: string }): Promise<PreacherRegionAccess> {
    return this.prisma.preacherRegionAccess.upsert({
      where: { user_id_region_id: { user_id: params.userId, region_id: params.regionId } },
      create: {
        institution: { connect: { id: params.institutionId } },
        user: { connect: { id: params.userId } },
        region: { connect: { id: params.regionId } },
        created_by: params.actorId,
      },
      update: {},
      include: { region: true, user: true, institution: true },
    });
  }

  async revoke(id: string): Promise<void> {
    await this.prisma.preacherRegionAccess.delete({ where: { id } });
  }
}
