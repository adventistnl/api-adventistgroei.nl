import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentHistoryUpdateInput } from './assignment-history-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AssignmentHistoryWhereUniqueInput } from './assignment-history-where-unique.input';

@ArgsType()
export class UpdateOneAssignmentHistoryArgs {

    @Field(() => AssignmentHistoryUpdateInput, {nullable:false})
    @Type(() => AssignmentHistoryUpdateInput)
    data!: AssignmentHistoryUpdateInput;

    @Field(() => AssignmentHistoryWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentHistoryWhereUniqueInput, 'id'>;
}
