import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentInviteTemplateWhereInput } from './assignment-invite-template-where.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateUpdateWithoutRequestsInput } from './assignment-invite-template-update-without-requests.input';

@InputType()
export class AssignmentInviteTemplateUpdateToOneWithWhereWithoutRequestsInput {

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereInput)
    where?: AssignmentInviteTemplateWhereInput;

    @Field(() => AssignmentInviteTemplateUpdateWithoutRequestsInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateUpdateWithoutRequestsInput)
    data!: AssignmentInviteTemplateUpdateWithoutRequestsInput;
}
