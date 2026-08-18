import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentInviteTemplateCreateWithoutRequestsInput } from './assignment-invite-template-create-without-requests.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateCreateOrConnectWithoutRequestsInput } from './assignment-invite-template-create-or-connect-without-requests.input';
import { AssignmentInviteTemplateUpsertWithoutRequestsInput } from './assignment-invite-template-upsert-without-requests.input';
import { AssignmentInviteTemplateWhereInput } from './assignment-invite-template-where.input';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';
import { AssignmentInviteTemplateUpdateToOneWithWhereWithoutRequestsInput } from './assignment-invite-template-update-to-one-with-where-without-requests.input';

@InputType()
export class AssignmentInviteTemplateUpdateOneWithoutRequestsNestedInput {

    @Field(() => AssignmentInviteTemplateCreateWithoutRequestsInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateCreateWithoutRequestsInput)
    create?: AssignmentInviteTemplateCreateWithoutRequestsInput;

    @Field(() => AssignmentInviteTemplateCreateOrConnectWithoutRequestsInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateCreateOrConnectWithoutRequestsInput)
    connectOrCreate?: AssignmentInviteTemplateCreateOrConnectWithoutRequestsInput;

    @Field(() => AssignmentInviteTemplateUpsertWithoutRequestsInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateUpsertWithoutRequestsInput)
    upsert?: AssignmentInviteTemplateUpsertWithoutRequestsInput;

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereInput)
    disconnect?: AssignmentInviteTemplateWhereInput;

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereInput)
    delete?: AssignmentInviteTemplateWhereInput;

    @Field(() => AssignmentInviteTemplateWhereUniqueInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>;

    @Field(() => AssignmentInviteTemplateUpdateToOneWithWhereWithoutRequestsInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateUpdateToOneWithWhereWithoutRequestsInput)
    update?: AssignmentInviteTemplateUpdateToOneWithWhereWithoutRequestsInput;
}
