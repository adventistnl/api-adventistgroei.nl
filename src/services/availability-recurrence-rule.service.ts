import { Injectable, BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { AvailabilityRecurrenceRuleRepository } from '../repositories/availability-recurrence-rule.repository';
import { UserRepository } from '../repositories/user.repository';
import { AvailabilityRecurrenceRule } from '../@generated/availability-recurrence-rule/availability-recurrence-rule.model';
import { SetAvailabilityRecurrenceRuleInput } from '../dto/availability-recurrence-rule.dto';
import { RecurrenceType } from '../@generated/prisma/recurrence-type.enum';
import { AvailabilityRecurrenceMaterializerService } from '../cron/services/availability-recurrence-materializer.service';
import { AvailabilityRepository } from '../repositories/availability.repository';

@Injectable()
export class AvailabilityRecurrenceRuleService {
  constructor(
    private readonly ruleRepository: AvailabilityRecurrenceRuleRepository,
    private readonly userRepository: UserRepository,
    private readonly availabilityRepository: AvailabilityRepository,
    private readonly materializer: AvailabilityRecurrenceMaterializerService,
  ) {}

  async myRules(userId: string): Promise<AvailabilityRecurrenceRule[]> {
    return this.ruleRepository.findByUser(userId);
  }

  /** R2.1/R11 — a preacher can only ever create/edit their own recurrence rules. */
  async setRule(input: SetAvailabilityRecurrenceRuleInput, userId: string): Promise<AvailabilityRecurrenceRule> {
    this.validateInput(input);

    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    let rule: AvailabilityRecurrenceRule;
    if (input.id) {
      const existing = await this.ruleRepository.findOwnById(input.id, userId);
      if (!existing) {
        throw new NotFoundException('Availability recurrence rule not found');
      }
      rule = await this.ruleRepository.update({ id: input.id, userId, input });
    } else {
      rule = await this.ruleRepository.create({ institutionId: user.institution_id, userId, input });
    }

    await this.materializer.materializeRule(rule);
    return rule;
  }

  /** R11 — deleting a rule reverts its still-rule-sourced dates to pending (R3), never touches manual overrides. */
  async deleteRule(id: string, userId: string): Promise<boolean> {
    const existing = await this.ruleRepository.findOwnById(id, userId);
    if (!existing) {
      throw new ForbiddenException('You can only delete your own availability recurrence rules');
    }

    await this.availabilityRepository.softDeleteByRule(id, userId);
    await this.ruleRepository.softDelete(id, userId);
    return true;
  }

  private validateInput(input: SetAvailabilityRecurrenceRuleInput): void {
    if (input.type === RecurrenceType.WEEKLY) {
      if (input.day_of_week === undefined || input.day_of_week === null) {
        throw new BadRequestException('day_of_week is required when type is WEEKLY');
      }
      if (!input.effective_from) {
        throw new BadRequestException('effective_from is required when type is WEEKLY');
      }
    }

    if (input.type === RecurrenceType.DATE_RANGE) {
      if (!input.start_date || !input.end_date) {
        throw new BadRequestException('start_date and end_date are required when type is DATE_RANGE');
      }
      if (input.end_date < input.start_date) {
        throw new BadRequestException('end_date must not be before start_date');
      }
    }
  }
}
