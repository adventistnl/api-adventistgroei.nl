import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentHistoryWhereInput } from './assignment-history-where.input';
import { Type } from 'class-transformer';
import { AssignmentHistoryOrderByWithAggregationInput } from './assignment-history-order-by-with-aggregation.input';
import { AssignmentHistoryScalarFieldEnum } from './assignment-history-scalar-field.enum';
import { AssignmentHistoryScalarWhereWithAggregatesInput } from './assignment-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AssignmentHistoryCountAggregateInput } from './assignment-history-count-aggregate.input';
import { AssignmentHistoryMinAggregateInput } from './assignment-history-min-aggregate.input';
import { AssignmentHistoryMaxAggregateInput } from './assignment-history-max-aggregate.input';

@ArgsType()
export class AssignmentHistoryGroupByArgs {

    @Field(() => AssignmentHistoryWhereInput, {nullable:true})
    @Type(() => AssignmentHistoryWhereInput)
    where?: AssignmentHistoryWhereInput;

    @Field(() => [AssignmentHistoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AssignmentHistoryOrderByWithAggregationInput>;

    @Field(() => [AssignmentHistoryScalarFieldEnum], {nullable:false})
    by!: Array<`${AssignmentHistoryScalarFieldEnum}`>;

    @Field(() => AssignmentHistoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: AssignmentHistoryScalarWhereWithAggregatesInput;

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
