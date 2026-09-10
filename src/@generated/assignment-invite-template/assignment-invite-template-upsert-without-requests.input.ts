import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentInviteTemplateUpdateWithoutRequestsInput } from './assignment-invite-template-update-without-requests.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateCreateWithoutRequestsInput } from './assignment-invite-template-create-without-requests.input';
import { AssignmentInviteTemplateWhereInput } from './assignment-invite-template-where.input';

@InputType()
export class AssignmentInviteTemplateUpsertWithoutRequestsInput {

    @Field(() => AssignmentInviteTemplateUpdateWithoutRequestsInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateUpdateWithoutRequestsInput)
    update!: AssignmentInviteTemplateUpdateWithoutRequestsInput;

    @Field(() => AssignmentInviteTemplateCreateWithoutRequestsInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateCreateWithoutRequestsInput)
    create!: AssignmentInviteTemplateCreateWithoutRequestsInput;

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereInput)
    where?: AssignmentInviteTemplateWhereInput;
}
