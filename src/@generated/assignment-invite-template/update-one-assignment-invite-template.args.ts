import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentInviteTemplateUpdateInput } from './assignment-invite-template-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';

@ArgsType()
export class UpdateOneAssignmentInviteTemplateArgs {

    @Field(() => AssignmentInviteTemplateUpdateInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateUpdateInput)
    data!: AssignmentInviteTemplateUpdateInput;

    @Field(() => AssignmentInviteTemplateWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>;
}
