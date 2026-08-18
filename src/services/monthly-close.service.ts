import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AssignmentRepository } from '../repositories/assignment.repository';
import { AssignmentRequestRepository } from '../repositories/assignment-request.repository';
import { SettingRepository } from '../repositories/setting.repository';
import { UserRepository } from '../repositories/user.repository';
import { NotificationService } from './notification.service';
import { AssignmentRequestService } from './assignment-request.service';
import { AssignmentStatus } from '../@generated/prisma/assignment-status.enum';
import { MonthlyCloseResult } from '../dto/monthly-close.dto';

const DEFAULT_CLOSE_DAY = 10;
const MONTHLY_CLOSE_DAY_SETTING_KEY = 'monthly_close_day';

function parseMonth(month: string): { start: Date; end: Date } {
  const match = /^(\d{4})-(\d{2})$/.exec(month);
  if (!match) {
    throw new BadRequestException(`Invalid month "${month}", expected format "YYYY-MM"`);
  }
  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;
  return { start: new Date(Date.UTC(year, monthIndex, 1)), end: new Date(Date.UTC(year, monthIndex + 1, 1)) };
}

/**
 * R10 — automatic monthly close: auto-accepts pending requests, locks every existing Assignment
 * in the target month against own-scope edits, and sends the pre-close reminder notifications.
 * Called both by MonthlyLockService's daily cron and by the triggerMonthlyClose mutation (for
 * on-demand testing, matching the pattern established by ProjectExpirationService/ProjectService).
 */
@Injectable()
export class MonthlyCloseService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly assignmentRepository: AssignmentRepository,
    private readonly requestRepository: AssignmentRequestRepository,
    private readonly settingRepository: SettingRepository,
    private readonly userRepository: UserRepository,
    private readonly notificationService: NotificationService,
    private readonly assignmentRequestService: AssignmentRequestService,
  ) {}

  /** Manual-trigger entry point for the triggerMonthlyClose mutation — testability for R10
   * without waiting for the cron's close day, scoped to the caller's own institution. */
  async triggerMonthlyClose(callerId: string, targetMonth: string): Promise<MonthlyCloseResult> {
    const caller = await this.userRepository.findById(callerId);
    if (!caller) throw new NotFoundException('User not found');
    return this.closeMonth(caller.institution_id, targetMonth, callerId);
  }

  /** The configurable close day for an institution (1-28), falling back to the default. */
  async getCloseDay(institutionId: string): Promise<number> {
    const settings = await this.settingRepository.findManyByFilters({ institution_id: institutionId });
    const setting = settings.find((s) => s.key === MONTHLY_CLOSE_DAY_SETTING_KEY);
    const parsed = setting ? Number(setting.value) : NaN;
    return Number.isInteger(parsed) && parsed >= 1 && parsed <= 28 ? parsed : DEFAULT_CLOSE_DAY;
  }

  /** (a) auto-confirms every pending request and (b) locks every remaining Assignment for the
   * target month. Returns counts for observability and for the manual-trigger mutation's response. */
  async closeMonth(institutionId: string, targetMonth: string, actorId: string): Promise<MonthlyCloseResult> {
    const { start, end } = parseMonth(targetMonth);

    const pendingRequests = await this.requestRepository.findPendingForMonth(institutionId, start, end);
    let autoAccepted = 0;
    for (const request of pendingRequests) {
      try {
        await this.assignmentRequestService.autoAcceptForMonthlyClose(request, actorId);
        autoAccepted++;
      } catch {
        /* one bad row must not abort the rest of the close */
      }
    }

    const unlocked = await this.assignmentRepository.findUnlockedByInstitutionAndMonth(institutionId, start, end);
    let locked = 0;
    for (const assignment of unlocked) {
      try {
        const newStatus = assignment.status === AssignmentStatus.CONFIRMED ? AssignmentStatus.CONFIRMED : AssignmentStatus.LOCKED;
        const lockedAssignment = await this.assignmentRepository.lock(assignment.id, newStatus, actorId);
        await this.assignmentRepository.recordHistory({
          assignmentId: assignment.id,
          fieldName: 'locked_at',
          oldValue: null,
          newValue: lockedAssignment.locked_at?.toISOString() ?? null,
          changedBy: actorId,
        });
        locked++;
      } catch {
        /* one bad row must not abort the rest of the close */
      }
    }

    return { autoAccepted, locked };
  }

  /** (c) reminds each church's leader, once per church, how many of its scheduled services for
   * the target month still have no confirmed preacher. */
  async sendOpenSlotReminders(institutionId: string, targetMonth: string, actorId: string): Promise<number> {
    const { start, end } = parseMonth(targetMonth);

    const serviceDates = await this.prisma.churchServiceCalendar.findMany({
      where: { institution_id: institutionId, has_service: true, date: { gte: start, lt: end } },
      include: { church: { select: { id: true, name: true, leader_id: true } } },
    });
    const confirmed = await this.prisma.assignment.findMany({
      where: { institution_id: institutionId, status: AssignmentStatus.CONFIRMED, is_deleted: false, date: { gte: start, lt: end } },
      select: { church_id: true, date: true },
    });
    const confirmedKeys = new Set(confirmed.map((a) => `${a.church_id}|${a.date.toISOString().slice(0, 10)}`));

    const openByChurch = new Map<string, { name: string; leaderId: string | null; count: number }>();
    for (const entry of serviceDates) {
      const key = `${entry.church_id}|${entry.date.toISOString().slice(0, 10)}`;
      if (confirmedKeys.has(key)) continue;
      const existing = openByChurch.get(entry.church_id);
      if (existing) {
        existing.count++;
      } else {
        openByChurch.set(entry.church_id, { name: entry.church.name, leaderId: entry.church.leader_id, count: 1 });
      }
    }

    let sent = 0;
    for (const info of openByChurch.values()) {
      if (!info.leaderId) continue;
      await this.notificationService
        .createForUser({
          userId: info.leaderId,
          institutionId,
          type: 'MONTHLY_CLOSE_OPEN_SLOTS',
          title: 'notifications.monthly_close_reminder_open_slots_title',
          message: 'notifications.monthly_close_reminder_open_slots_message',
          metadata: { churchName: info.name, count: info.count, month: targetMonth },
          actorUserId: actorId,
        })
        .catch(() => {});
      sent++;
    }
    return sent;
  }

  /** (c) reminds every preacher who has set availability before but has not yet set any for the
   * target month — "established" meaning they've used the module previously, not a brand-new user. */
  async sendIncompleteAvailabilityReminders(institutionId: string, targetMonth: string, actorId: string): Promise<number> {
    const { start, end } = parseMonth(targetMonth);

    const establishedPreachers = await this.prisma.availability.findMany({
      where: { institution_id: institutionId, is_deleted: false, date: { lt: start } },
      select: { user_id: true },
      distinct: ['user_id'],
    });
    const setForMonth = await this.prisma.availability.findMany({
      where: { institution_id: institutionId, is_deleted: false, date: { gte: start, lt: end } },
      select: { user_id: true },
      distinct: ['user_id'],
    });
    const setForMonthIds = new Set(setForMonth.map((u) => u.user_id));
    const missing = establishedPreachers.map((u) => u.user_id).filter((userId) => !setForMonthIds.has(userId));

    let sent = 0;
    for (const userId of missing) {
      await this.notificationService
        .createForUser({
          userId,
          institutionId,
          type: 'MONTHLY_CLOSE_INCOMPLETE_AVAILABILITY',
          title: 'notifications.monthly_close_reminder_incomplete_availability_title',
          message: 'notifications.monthly_close_reminder_incomplete_availability_message',
          metadata: { month: targetMonth },
          actorUserId: actorId,
        })
        .catch(() => {});
      sent++;
    }
    return sent;
  }
}
