import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentInviteTemplateCreateInput } from './assignment-invite-template-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAssignmentInviteTemplateArgs {

    @Field(() => AssignmentInviteTemplateCreateInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateCreateInput)
    data!: AssignmentInviteTemplateCreateInput;
}
