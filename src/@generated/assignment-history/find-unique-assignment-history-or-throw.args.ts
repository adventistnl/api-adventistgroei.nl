import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentHistoryWhereUniqueInput } from './assignment-history-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAssignmentHistoryOrThrowArgs {

    @Field(() => AssignmentHistoryWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentHistoryWhereUniqueInput, 'id'>;
}
