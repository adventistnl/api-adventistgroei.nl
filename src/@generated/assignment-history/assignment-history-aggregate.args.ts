import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentHistoryWhereInput } from './assignment-history-where.input';
import { Type } from 'class-transformer';
import { AssignmentHistoryOrderByWithRelationInput } from './assignment-history-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AssignmentHistoryWhereUniqueInput } from './assignment-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssignmentHistoryCountAggregateInput } from './assignment-history-count-aggregate.input';
import { AssignmentHistoryMinAggregateInput } from './assignment-history-min-aggregate.input';
import { AssignmentHistoryMaxAggregateInput } from './assignment-history-max-aggregate.input';

@ArgsType()
export class AssignmentHistoryAggregateArgs {

    @Field(() => AssignmentHistoryWhereInput, {nullable:true})
    @Type(() => AssignmentHistoryWhereInput)
    where?: AssignmentHistoryWhereInput;

    @Field(() => [AssignmentHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssignmentHistoryOrderByWithRelationInput>;

    @Field(() => AssignmentHistoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AssignmentHistoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AssignmentHistoryCountAggregateInput, {nullable:true})
    _count?: AssignmentHistoryCountAggregateInput;

    @Field(() => AssignmentHistoryMinAggregateInput, {nullable:true})
    _min?: AssignmentHistoryMinAggregateInput;

    @Field(() => AssignmentHistoryMaxAggregateInput, {nullable:true})
    _max?: AssignmentHistoryMaxAggregateInput;
}
