import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateCreateWithoutRequestsInput } from './assignment-invite-template-create-without-requests.input';

@InputType()
export class AssignmentInviteTemplateCreateOrConnectWithoutRequestsInput {

    @Field(() => AssignmentInviteTemplateWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>;

    @Field(() => AssignmentInviteTemplateCreateWithoutRequestsInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateCreateWithoutRequestsInput)
    create!: AssignmentInviteTemplateCreateWithoutRequestsInput;
}
