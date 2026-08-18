import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AssignmentInviteTemplateService } from '../services/assignment-invite-template.service';
import { AssignmentInviteTemplate } from '../@generated/assignment-invite-template/assignment-invite-template.model';
import { CreateAssignmentInviteTemplateInput, UpdateAssignmentInviteTemplateInput } from '../dto/assignment-request.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => AssignmentInviteTemplate)
@UseGuards(PermissionsGuard)
export class AssignmentInviteTemplateResolver {
  constructor(private readonly templateService: AssignmentInviteTemplateService) {}

  @Permission()
  @Query(() => [AssignmentInviteTemplate])
  async assignmentInviteTemplates(@Context() context: { userId: string }): Promise<AssignmentInviteTemplate[]> {
    return this.templateService.myInstitutionTemplates(context.userId);
  }

  @Permission()
  @Mutation(() => AssignmentInviteTemplate)
  async createAssignmentInviteTemplate(
    @Args('input') input: CreateAssignmentInviteTemplateInput,
    @Context() context: { userId: string },
  ): Promise<AssignmentInviteTemplate> {
    return this.templateService.create(input, context.userId);
  }

  @Permission()
  @Mutation(() => AssignmentInviteTemplate)
  async updateAssignmentInviteTemplate(
    @Args('id') id: string,
    @Args('input') input: UpdateAssignmentInviteTemplateInput,
    @Context() context: { userId: string },
  ): Promise<AssignmentInviteTemplate> {
    return this.templateService.update(id, input, context.userId);
  }

  @Permission()
  @Mutation(() => Boolean)
  async deleteAssignmentInviteTemplate(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<boolean> {
    return this.templateService.delete(id, context.userId);
  }
}
