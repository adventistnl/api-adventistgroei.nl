import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { AssignmentInviteTemplate } from '../@generated/assignment-invite-template/assignment-invite-template.model';
import { CreateAssignmentInviteTemplateInput, UpdateAssignmentInviteTemplateInput } from '../dto/assignment-request.dto';

@Injectable()
export class AssignmentInviteTemplateRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByInstitution(institutionId: string): Promise<AssignmentInviteTemplate[]> {
    return this.prisma.assignmentInviteTemplate.findMany({
      where: { institution_id: institutionId, is_deleted: false },
      orderBy: { name: 'asc' },
    });
  }

  async findOwnById(id: string, institutionId: string): Promise<AssignmentInviteTemplate | null> {
    return this.prisma.assignmentInviteTemplate.findFirst({
      where: { id, institution_id: institutionId, is_deleted: false },
    });
  }

  async create(params: { institutionId: string; input: CreateAssignmentInviteTemplateInput; actorId: string }): Promise<AssignmentInviteTemplate> {
    return this.prisma.assignmentInviteTemplate.create({
      data: {
        institution: { connect: { id: params.institutionId } },
        name: params.input.name,
        subject: params.input.subject,
        body: params.input.body,
        created_by: params.actorId,
        updated_by: params.actorId,
      },
    });
  }

  async update(id: string, input: UpdateAssignmentInviteTemplateInput, actorId: string): Promise<AssignmentInviteTemplate> {
    return this.prisma.assignmentInviteTemplate.update({
      where: { id },
      data: { ...input, updated_by: actorId },
    });
  }

  async softDelete(id: string, actorId: string): Promise<void> {
    await this.prisma.assignmentInviteTemplate.update({
      where: { id },
      data: { is_deleted: true, deleted_at: new Date(), deleted_by: actorId, updated_by: actorId },
    });
  }
}
