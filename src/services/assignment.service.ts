import { Injectable, BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { AssignmentRepository } from '../repositories/assignment.repository';
import { ChurchRepository } from '../repositories/church.repository';
import { UserRepository } from '../repositories/user.repository';
import { PrismaService } from './prisma.service';
import { Assignment } from '../@generated/assignment/assignment.model';
import { AssignmentOrigin } from '../@generated/prisma/assignment-origin.enum';
import { AssignmentStatus } from '../@generated/prisma/assignment-status.enum';
import { SetAssignmentInput } from '../dto/assignment.dto';

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
export class AssignmentService {
  constructor(
    private readonly assignmentRepository: AssignmentRepository,
    private readonly churchRepository: ChurchRepository,
    private readonly userRepository: UserRepository,
    private readonly prisma: PrismaService,
  ) {}

  async scheduleOverview(userId: string, month: string): Promise<Assignment[]> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new NotFoundException('User not found');

    const { start, end } = parseMonth(month);
    return this.assignmentRepository.findByInstitutionAndMonth(user.institution_id, start, end);
  }

  /** R8/R11 — a church leader can only directly assign a preacher to their own church. */
  async setAssignment(input: SetAssignmentInput, userId: string): Promise<Assignment> {
    const church = await this.churchRepository.findById(input.church_id);
    if (!church) throw new NotFoundException('Church not found');
    if (church.leader_id !== userId) {
      throw new ForbiddenException('You can only assign a preacher to a church you lead');
    }
    return this.applyAssignment(input, church.institution_id, AssignmentOrigin.SELF_FILLED, userId);
  }

  /** R11 — admin/department leader path, any church within their own institution. */
  async setAssignmentAny(input: SetAssignmentInput, userId: string): Promise<Assignment> {
    const [church, user] = await Promise.all([
      this.churchRepository.findById(input.church_id),
      this.userRepository.findById(userId),
    ]);
    if (!church) throw new NotFoundException('Church not found');
    if (!user) throw new NotFoundException('User not found');
    if (church.institution_id !== user.institution_id) {
      throw new ForbiddenException('You can only manage assignments within your own institution');
    }
    return this.applyAssignment(input, church.institution_id, AssignmentOrigin.ADMIN_ASSIGNED, userId);
  }

  private async applyAssignment(
    input: SetAssignmentInput,
    institutionId: string,
    origin: AssignmentOrigin,
    userId: string,
  ): Promise<Assignment> {
    await this.assertServiceScheduled(input.church_id, input.date);
    const before = await this.assignmentRepository.findOne(input.church_id, input.date);
    const status = input.status ?? (input.user_id ? AssignmentStatus.CONFIRMED : AssignmentStatus.DRAFT);

    const result = await this.assignmentRepository.upsert({
      institutionId,
      churchId: input.church_id,
      date: input.date,
      userId: input.user_id ?? null,
      status,
      origin,
      actorId: userId,
    });

    await this.assignmentRepository.recordHistory({
      assignmentId: result.id,
      fieldName: 'status',
      oldValue: before?.status ?? null,
      newValue: status,
      changedBy: userId,
    });

    return result;
  }

  /** R1/R4 — an Assignment only ever exists for a date the church actually has a scheduled service. */
  private async assertServiceScheduled(churchId: string, date: Date): Promise<void> {
    const serviceEntry = await this.prisma.churchServiceCalendar.findUnique({
      where: { church_id_date: { church_id: churchId, date } },
    });
    if (!serviceEntry?.has_service) {
      throw new BadRequestException('This church has no scheduled service on this date');
    }
  }
}
