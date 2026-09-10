import { Injectable, BadRequestException, ConflictException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { render } from 'mustache';
import { AssignmentRequestRepository } from '../repositories/assignment-request.repository';
import { AssignmentRepository } from '../repositories/assignment.repository';
import { AssignmentInviteTemplateRepository } from '../repositories/assignment-invite-template.repository';
import { PreacherRegionAccessRepository } from '../repositories/preacher-region-access.repository';
import { ChurchRepository } from '../repositories/church.repository';
import { UserRepository } from '../repositories/user.repository';
import { PrismaService } from './prisma.service';
import { NotificationService } from './notification.service';
import { EmailService } from './email.service';
import { ScheduleNotificationEventType } from '../dto/schedule-notification-email.dto';
import { LanguagePreference } from '../@generated/prisma/language-preference.enum';
import { AssignmentRequest } from '../@generated/assignment-request/assignment-request.model';
import { PreacherRegionAccess } from '../@generated/preacher-region-access/preacher-region-access.model';
import { RequestType } from '../@generated/prisma/request-type.enum';
import { RequestStatus } from '../@generated/prisma/request-status.enum';
import { AssignmentOrigin } from '../@generated/prisma/assignment-origin.enum';
import { AssignmentStatus } from '../@generated/prisma/assignment-status.enum';
import { AvailabilityStatus } from '../@generated/prisma/availability-status.enum';
import { OpenSlotForPreacher } from '../dto/assignment-request.dto';
import type { User } from '../@generated/user/user.model';

const SCHEDULE_EMAIL_EVENT_TYPES = new Set<ScheduleNotificationEventType>([
  'ASSIGNMENT_REQUEST_RECEIVED',
  'ASSIGNMENT_INVITE_RECEIVED',
  'ASSIGNMENT_REQUEST_ACCEPTED',
  'ASSIGNMENT_REQUEST_DECLINED',
  'MONTHLY_CLOSE_AUTO_CONFIRMED',
]);

function parseMonth(month: string): { start: Date; end: Date } {
  const match = /^(\d{4})-(\d{2})$/.exec(month);
  if (!match) {
    throw new BadRequestException(`Invalid month "${month}", expected format "YYYY-MM"`);
  }
  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;
  return { start: new Date(Date.UTC(year, monthIndex, 1)), end: new Date(Date.UTC(year, monthIndex + 1, 1)) };
}

@Injectable()
export class AssignmentRequestService {
  constructor(
    private readonly requestRepository: AssignmentRequestRepository,
    private readonly assignmentRepository: AssignmentRepository,
    private readonly templateRepository: AssignmentInviteTemplateRepository,
    private readonly regionAccessRepository: PreacherRegionAccessRepository,
    private readonly churchRepository: ChurchRepository,
    private readonly userRepository: UserRepository,
    private readonly prisma: PrismaService,
    private readonly notificationService: NotificationService,
    private readonly emailService: EmailService,
  ) {}

  async myAssignmentRequests(userId: string): Promise<AssignmentRequest[]> {
    return this.requestRepository.findByUser(userId);
  }

  /** R5 (preacher applies) + R6 (reach) + R4 (must be an open slot). */
  async requestAssignment(churchId: string, date: Date, userId: string): Promise<AssignmentRequest> {
    const [church, user] = await Promise.all([
      this.churchRepository.findById(churchId),
      this.userRepository.findById(userId),
    ]);
    this.assertSameInstitution(church!.institution_id, user!.institution_id);
    await this.assertChurchWithinReach(church!.id, church!.region_id, userId);
    await this.assertOpenSlot(churchId, date);
    await this.assertNoPendingDuplicate(churchId, date, userId);

    const request = await this.requestRepository.create({
      institutionId: church!.institution_id,
      churchId,
      date,
      userId,
      type: RequestType.PREACHER_REQUESTED,
      actorId: userId,
    });

    if (church!.leader_id) {
      await this.notify(
        church!.leader_id,
        church!.institution_id,
        'ASSIGNMENT_REQUEST_RECEIVED',
        'notifications.assignment_request_received_title',
        'notifications.assignment_request_received_message',
        { preacherName: user!.name, churchName: church!.name },
        userId,
      );
    }

    return request;
  }

  /** R5 (church/admin invites), own church only — R11. */
  async inviteToAssignment(churchId: string, date: Date, invitedUserId: string, templateId: string | undefined, callerId: string): Promise<AssignmentRequest> {
    const church = await this.churchRepository.findById(churchId);
    if (church!.leader_id !== callerId) {
      throw new ForbiddenException('You can only invite a preacher to a church you lead');
    }
    return this.createInvite(church!.id, church!.institution_id, church!.name, church!.region_id, date, invitedUserId, templateId, callerId);
  }

  /** R5 (church/admin invites), any church within the caller's institution — R11 item E. */
  async inviteToAssignmentAny(churchId: string, date: Date, invitedUserId: string, templateId: string | undefined, callerId: string): Promise<AssignmentRequest> {
    const [church, caller] = await Promise.all([
      this.churchRepository.findById(churchId),
      this.userRepository.findById(callerId),
    ]);
    this.assertSameInstitution(church!.institution_id, caller!.institution_id);
    return this.createInvite(church!.id, church!.institution_id, church!.name, church!.region_id, date, invitedUserId, templateId, callerId);
  }

  private async createInvite(
    churchId: string,
    institutionId: string,
    churchName: string,
    churchRegionId: string | null,
    date: Date,
    invitedUserId: string,
    templateId: string | undefined,
    callerId: string,
  ): Promise<AssignmentRequest> {
    const invitedUser = await this.userRepository.findById(invitedUserId);
    this.assertSameInstitution(institutionId, invitedUser!.institution_id);
    await this.assertChurchWithinReach(churchId, churchRegionId, invitedUserId);
    await this.assertOpenSlot(churchId, date);
    await this.assertNoPendingDuplicate(churchId, date, invitedUserId);

    let template: { id: string; subject: string; body: string } | null = null;
    if (templateId) {
      const found = await this.templateRepository.findOwnById(templateId, institutionId);
      if (!found) throw new NotFoundException('Assignment invite template not found');
      template = found;
    }

    const request = await this.requestRepository.create({
      institutionId,
      churchId,
      date,
      userId: invitedUserId,
      type: RequestType.CHURCH_INVITED,
      templateId: template?.id,
      actorId: callerId,
    });

    const caller = await this.userRepository.findById(callerId);
    const vars = { churchName, date: date.toISOString().slice(0, 10), preacherName: invitedUser!.name, inviterName: caller!.name };

    if (template) {
      // Admin-authored, Mustache-rendered free text — already in whatever language the admin
      // wrote it in, so it's stored and shown as-is via the 'custom_text' passthrough key
      // instead of a fixed translation key (see notifications.custom_text: "{{text}}").
      const customText = render(template.body, vars);
      await this.notify(
        invitedUserId,
        institutionId,
        'ASSIGNMENT_INVITE_RECEIVED',
        'notifications.assignment_invite_custom_title',
        'notifications.custom_text',
        { text: customText, churchName, date: vars.date },
        callerId,
      );
    } else {
      await this.notify(
        invitedUserId,
        institutionId,
        'ASSIGNMENT_INVITE_RECEIVED',
        'notifications.assignment_invite_received_title',
        'notifications.assignment_invite_received_message',
        { churchName, date: vars.date },
        callerId,
      );
    }

    return request;
  }

  /** R7/R11 — own scope: invited preacher (CHURCH_INVITED) or the church's own leader (PREACHER_REQUESTED). */
  async respondToAssignmentRequest(id: string, accept: boolean, callerId: string): Promise<AssignmentRequest> {
    return this.respond(id, accept, callerId, false);
  }

  /** R7/R11 item E — admin/department-leader path: only valid for PREACHER_REQUESTED (an admin
   * can't accept/decline an invite on a preacher's behalf — that's the preacher's own commitment). */
  async respondToAssignmentRequestAny(id: string, accept: boolean, callerId: string): Promise<AssignmentRequest> {
    return this.respond(id, accept, callerId, true);
  }

  private async respond(id: string, accept: boolean, callerId: string, isAny: boolean): Promise<AssignmentRequest> {
    const request = await this.requestRepository.findById(id);
    if (!request) throw new NotFoundException('Assignment request not found');
    if (request.status !== RequestStatus.PENDING) {
      throw new ConflictException('This request has already been decided');
    }

    const church = await this.churchRepository.findById(request.church_id);
    if (isAny) {
      const caller = await this.userRepository.findById(callerId);
      this.assertSameInstitution(request.institution_id, caller!.institution_id);
      if (request.type !== RequestType.PREACHER_REQUESTED) {
        throw new ForbiddenException('Only the invited preacher can respond to a CHURCH_INVITED request');
      }
    } else {
      this.assertCanRespond(request, church!, callerId);
      // R10 — once the month is locked, own-scope responses can no longer change the outcome;
      // only the *Any (admin/department-leader) path may still override a locked slot.
      await this.assertSlotNotLocked(request.church_id, request.date);
    }

    if (!accept) {
      const declined = await this.requestRepository.updateStatus(id, RequestStatus.DECLINED, callerId);
      await this.notifyOtherParty(
        request,
        church!,
        'ASSIGNMENT_REQUEST_DECLINED',
        'notifications.assignment_request_declined_title',
        'notifications.assignment_request_declined_message',
        { churchName: church!.name, date: request.date.toISOString().slice(0, 10) },
      );
      return declined;
    }

    const accepted = await this.acceptRequest(request, callerId);
    await this.notifyOtherParty(
      request,
      church!,
      'ASSIGNMENT_REQUEST_ACCEPTED',
      'notifications.assignment_request_accepted_title',
      'notifications.assignment_request_accepted_message',
      { churchName: church!.name, date: request.date.toISOString().slice(0, 10) },
    );

    return accepted;
  }

  /** Confirms the underlying Assignment for an accepted request and marks the request ACCEPTED,
   * shared by the interactive respond() path and R10's automated monthly-close auto-acceptance. */
  private async acceptRequest(request: AssignmentRequest, actorId: string): Promise<AssignmentRequest> {
    const origin = request.type === RequestType.PREACHER_REQUESTED ? AssignmentOrigin.PREACHER_REQUESTED : AssignmentOrigin.CHURCH_INVITED;
    const before = await this.assignmentRepository.findOne(request.church_id, request.date);
    const assignment = await this.assignmentRepository.upsert({
      institutionId: request.institution_id,
      churchId: request.church_id,
      date: request.date,
      userId: request.user_id,
      status: AssignmentStatus.CONFIRMED,
      origin,
      actorId,
    });
    await this.assignmentRepository.recordHistory({
      assignmentId: assignment.id,
      fieldName: 'status',
      oldValue: before?.status ?? null,
      newValue: AssignmentStatus.CONFIRMED,
      changedBy: actorId,
    });

    const accepted = await this.requestRepository.updateStatus(request.id, RequestStatus.ACCEPTED, actorId);
    await this.requestRepository.supersedeOthers(request.church_id, request.date, request.id, actorId);
    return accepted;
  }

  /** R10 — called by MonthlyCloseService for each still-pending request in the month being
   * closed; behaves like an accepted response but notifies the preacher that it happened
   * automatically rather than that "the other party accepted it". */
  async autoAcceptForMonthlyClose(request: AssignmentRequest, actorId: string): Promise<AssignmentRequest> {
    const church = await this.churchRepository.findById(request.church_id);
    const accepted = await this.acceptRequest(request, actorId);
    await this.notify(
      request.user_id,
      request.institution_id,
      'MONTHLY_CLOSE_AUTO_CONFIRMED',
      'notifications.monthly_close_auto_confirmed_title',
      'notifications.monthly_close_auto_confirmed_message',
      { churchName: church?.name ?? '', date: request.date.toISOString().slice(0, 10) },
      actorId,
    );
    return accepted;
  }

  /** R10 — an own-scope response can't change a slot whose Assignment was already locked by
   * monthly close; the *Any admin/department-leader path is the "explicit admin flow" override. */
  private async assertSlotNotLocked(churchId: string, date: Date): Promise<void> {
    const existing = await this.assignmentRepository.findOne(churchId, date);
    if (existing?.locked_at) {
      throw new ConflictException('This month has been closed and can no longer be edited directly — contact an administrator');
    }
  }

  /** R6 — churches with an open slot within the caller's own reach. */
  async openSlotsForPreacher(userId: string, month: string): Promise<OpenSlotForPreacher[]> {
    const user = await this.userRepository.findById(userId);
    const eligibleRegionIds = await this.regionAccessRepository.findEligibleRegionIds(userId);
    const { start, end } = parseMonth(month);

    const serviceDates = await this.prisma.churchServiceCalendar.findMany({
      where: { institution_id: user!.institution_id, has_service: true, date: { gte: start, lt: end } },
      include: { church: { select: { id: true, name: true, region_id: true } } },
    });

    const confirmed = await this.prisma.assignment.findMany({
      where: { institution_id: user!.institution_id, status: AssignmentStatus.CONFIRMED, is_deleted: false, date: { gte: start, lt: end } },
      select: { church_id: true, date: true },
    });
    const confirmedKeys = new Set(confirmed.map((a) => `${a.church_id}|${a.date.toISOString().slice(0, 10)}`));

    return serviceDates
      .filter((entry) => !entry.church.region_id || eligibleRegionIds.has(entry.church.region_id))
      .filter((entry) => !confirmedKeys.has(`${entry.church_id}|${entry.date.toISOString().slice(0, 10)}`))
      .map((entry) => ({ churchId: entry.church.id, churchName: entry.church.name, date: entry.date }));
  }

  /** R6 — preachers with availability marked for the date, within the church's reach. */
  async eligiblePreachersForSlot(churchId: string, date: Date, callerId: string): Promise<User[]> {
    const [church, caller] = await Promise.all([
      this.churchRepository.findById(churchId),
      this.userRepository.findById(callerId),
    ]);
    this.assertSameInstitution(church!.institution_id, caller!.institution_id);

    const availablePreachers = await this.prisma.availability.findMany({
      where: { institution_id: church!.institution_id, status: AvailabilityStatus.AVAILABLE, is_deleted: false, date },
      include: { user: true },
    });

    if (!church!.region_id) {
      return availablePreachers.map((entry) => entry.user);
    }

    const eligible: User[] = [];
    for (const entry of availablePreachers) {
      const regionIds = await this.regionAccessRepository.findEligibleRegionIds(entry.user_id);
      if (regionIds.has(church!.region_id)) {
        eligible.push(entry.user);
      }
    }
    return eligible;
  }

  async myRegionAccess(userId: string): Promise<PreacherRegionAccess[]> {
    return this.regionAccessRepository.findByUser(userId);
  }

  async grantRegionAccess(targetUserId: string, regionId: string, callerId: string): Promise<PreacherRegionAccess> {
    const [target, caller] = await Promise.all([
      this.userRepository.findById(targetUserId),
      this.userRepository.findById(callerId),
    ]);
    this.assertSameInstitution(target!.institution_id, caller!.institution_id);
    return this.regionAccessRepository.grant({ institutionId: caller!.institution_id, userId: targetUserId, regionId, actorId: callerId });
  }

  async revokeRegionAccess(id: string): Promise<boolean> {
    await this.regionAccessRepository.revoke(id);
    return true;
  }

  private assertSameInstitution(a: string, b: string): void {
    if (a !== b) {
      throw new ForbiddenException('You can only act within your own institution');
    }
  }

  private async assertChurchWithinReach(_churchId: string, churchRegionId: string | null, preacherUserId: string): Promise<void> {
    if (!churchRegionId) return; // a church with no region set is visible to everyone (R6 can't restrict what isn't tagged)
    const eligibleRegionIds = await this.regionAccessRepository.findEligibleRegionIds(preacherUserId);
    if (!eligibleRegionIds.has(churchRegionId)) {
      throw new ForbiddenException("This church is outside the preacher's reach");
    }
  }

  /** R1/R4 — a slot only exists on a date the church actually has a scheduled service, and
   * only while it doesn't already have a confirmed preacher. */
  private async assertOpenSlot(churchId: string, date: Date): Promise<void> {
    const serviceEntry = await this.prisma.churchServiceCalendar.findUnique({
      where: { church_id_date: { church_id: churchId, date } },
    });
    if (!serviceEntry?.has_service) {
      throw new BadRequestException('This church has no scheduled service on this date');
    }

    const existing = await this.assignmentRepository.findOne(churchId, date);
    if (existing && existing.status === AssignmentStatus.CONFIRMED) {
      throw new ConflictException('This slot already has a confirmed preacher');
    }
  }

  private async assertNoPendingDuplicate(churchId: string, date: Date, userId: string): Promise<void> {
    const pending = await this.requestRepository.findPendingForSlot(churchId, date);
    if (pending.some((r) => r.user_id === userId)) {
      throw new ConflictException('A pending request for this slot already exists');
    }
  }

  /** R11 (own scope) — the invited preacher for CHURCH_INVITED, or the church's own leader for
   * PREACHER_REQUESTED. The broad admin/department-leader path is respondToAssignmentRequestAny. */
  private assertCanRespond(request: AssignmentRequest, church: { leader_id: string | null }, callerId: string): void {
    if (request.type === RequestType.CHURCH_INVITED) {
      if (request.user_id !== callerId) {
        throw new ForbiddenException('Only the invited preacher can respond to this invite');
      }
      return;
    }
    if (church.leader_id !== callerId) {
      throw new ForbiddenException('Only the church you lead can respond to this request');
    }
  }

  private async notifyOtherParty(
    request: AssignmentRequest,
    church: { leader_id: string | null },
    type: string,
    title: string,
    message: string,
    metadata: Record<string, unknown>,
  ): Promise<void> {
    const recipientId = request.type === RequestType.CHURCH_INVITED ? request.user_id : church.leader_id;
    if (!recipientId) return;
    await this.notify(recipientId, request.institution_id, type, title, message, metadata, request.user_id);
  }

  /**
   * `title`/`message` must be i18next translation keys (e.g. 'notifications.foo_title'), not
   * rendered text — the frontend resolves them via t(key, metadata) in the recipient's own
   * language, matching the convention established by ProjectHistoryService.buildNotificationPayload().
   *
   * Also dispatches an email for the same event (R6.1 item 7 — this audience doesn't check the
   * dashboard on their own) whenever `type` is a recognized scheduling event; failures on either
   * side never block the underlying scheduling action.
   */
  private async notify(
    userId: string,
    institutionId: string,
    type: string,
    title: string,
    message: string,
    metadata: Record<string, unknown>,
    actorId: string,
  ): Promise<void> {
    await Promise.all([
      this.notificationService.createForUser({ userId, institutionId, type, title, message, metadata, actorUserId: actorId }).catch(() => {}),
      this.sendScheduleEmail(userId, type, metadata),
    ]);
  }

  private async sendScheduleEmail(userId: string, type: string, metadata: Record<string, unknown>): Promise<void> {
    if (!SCHEDULE_EMAIL_EVENT_TYPES.has(type as ScheduleNotificationEventType)) return;
    try {
      const user = await this.userRepository.findById(userId);
      if (!user?.email) return;
      await this.emailService.sendScheduleNotificationEmail({
        to: user.email,
        recipientName: user.name,
        language: user.language_preference as LanguagePreference,
        eventType: type as ScheduleNotificationEventType,
        vars: metadata as Record<string, string | number>,
        ctaUrl: `${process.env.FRONTEND_URL}/schedule/invitations`,
      });
    } catch {
      /* email failures never block the underlying scheduling action */
    }
  }
}
