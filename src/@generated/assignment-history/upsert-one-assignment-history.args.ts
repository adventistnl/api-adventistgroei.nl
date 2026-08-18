import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentHistoryWhereUniqueInput } from './assignment-history-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentHistoryCreateInput } from './assignment-history-create.input';
import { AssignmentHistoryUpdateInput } from './assignment-history-update.input';

@ArgsType()
export class UpsertOneAssignmentHistoryArgs {

    @Field(() => AssignmentHistoryWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentHistoryWhereUniqueInput, 'id'>;

    @Field(() => AssignmentHistoryCreateInput, {nullable:false})
    @Type(() => AssignmentHistoryCreateInput)
    create!: AssignmentHistoryCreateInput;

    @Field(() => AssignmentHistoryUpdateInput, {nullable:false})
    @Type(() => AssignmentHistoryUpdateInput)
    update!: AssignmentHistoryUpdateInput;
}
