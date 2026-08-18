import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentInviteTemplateCreateWithoutRequestsInput } from './assignment-invite-template-create-without-requests.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateCreateOrConnectWithoutRequestsInput } from './assignment-invite-template-create-or-connect-without-requests.input';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';

@InputType()
export class AssignmentInviteTemplateCreateNestedOneWithoutRequestsInput {

    @Field(() => AssignmentInviteTemplateCreateWithoutRequestsInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateCreateWithoutRequestsInput)
    create?: AssignmentInviteTemplateCreateWithoutRequestsInput;

    @Field(() => AssignmentInviteTemplateCreateOrConnectWithoutRequestsInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateCreateOrConnectWithoutRequestsInput)
    connectOrCreate?: AssignmentInviteTemplateCreateOrConnectWithoutRequestsInput;

    @Field(() => AssignmentInviteTemplateWhereUniqueInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>;
}
