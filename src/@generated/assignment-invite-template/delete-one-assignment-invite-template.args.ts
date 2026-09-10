import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAssignmentInviteTemplateArgs {

    @Field(() => AssignmentInviteTemplateWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>;
}
