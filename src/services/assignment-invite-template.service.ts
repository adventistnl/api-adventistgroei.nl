import { Injectable, NotFoundException } from '@nestjs/common';
import { AssignmentInviteTemplateRepository } from '../repositories/assignment-invite-template.repository';
import { UserRepository } from '../repositories/user.repository';
import { AssignmentInviteTemplate } from '../@generated/assignment-invite-template/assignment-invite-template.model';
import { CreateAssignmentInviteTemplateInput, UpdateAssignmentInviteTemplateInput } from '../dto/assignment-request.dto';

@Injectable()
export class AssignmentInviteTemplateService {
  constructor(
    private readonly templateRepository: AssignmentInviteTemplateRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async myInstitutionTemplates(userId: string): Promise<AssignmentInviteTemplate[]> {
    const user = await this.userRepository.findById(userId);
    return this.templateRepository.findByInstitution(user!.institution_id);
  }

  async create(input: CreateAssignmentInviteTemplateInput, userId: string): Promise<AssignmentInviteTemplate> {
    const user = await this.userRepository.findById(userId);
    return this.templateRepository.create({ institutionId: user!.institution_id, input, actorId: userId });
  }

  async update(id: string, input: UpdateAssignmentInviteTemplateInput, userId: string): Promise<AssignmentInviteTemplate> {
    const template = await this.findOwnOrThrow(id, userId);
    return this.templateRepository.update(template.id, input, userId);
  }

  async delete(id: string, userId: string): Promise<boolean> {
    const template = await this.findOwnOrThrow(id, userId);
    await this.templateRepository.softDelete(template.id, userId);
    return true;
  }

  private async findOwnOrThrow(id: string, userId: string): Promise<AssignmentInviteTemplate> {
    const user = await this.userRepository.findById(userId);
    const template = await this.templateRepository.findOwnById(id, user!.institution_id);
    if (!template) {
      throw new NotFoundException('Assignment invite template not found');
    }
    return template;
  }
}
