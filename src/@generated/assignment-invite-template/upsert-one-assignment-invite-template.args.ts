import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateCreateInput } from './assignment-invite-template-create.input';
import { AssignmentInviteTemplateUpdateInput } from './assignment-invite-template-update.input';

@ArgsType()
export class UpsertOneAssignmentInviteTemplateArgs {

    @Field(() => AssignmentInviteTemplateWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>;

    @Field(() => AssignmentInviteTemplateCreateInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateCreateInput)
    create!: AssignmentInviteTemplateCreateInput;

    @Field(() => AssignmentInviteTemplateUpdateInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateUpdateInput)
    update!: AssignmentInviteTemplateUpdateInput;
}
