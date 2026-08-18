import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentRequestWhereInput } from './assignment-request-where.input';
import { Type } from 'class-transformer';
import { AssignmentRequestOrderByWithAggregationInput } from './assignment-request-order-by-with-aggregation.input';
import { AssignmentRequestScalarFieldEnum } from './assignment-request-scalar-field.enum';
import { AssignmentRequestScalarWhereWithAggregatesInput } from './assignment-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AssignmentRequestCountAggregateInput } from './assignment-request-count-aggregate.input';
import { AssignmentRequestMinAggregateInput } from './assignment-request-min-aggregate.input';
import { AssignmentRequestMaxAggregateInput } from './assignment-request-max-aggregate.input';

@ArgsType()
export class AssignmentRequestGroupByArgs {

    @Field(() => AssignmentRequestWhereInput, {nullable:true})
    @Type(() => AssignmentRequestWhereInput)
    where?: AssignmentRequestWhereInput;

    @Field(() => [AssignmentRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AssignmentRequestOrderByWithAggregationInput>;

    @Field(() => [AssignmentRequestScalarFieldEnum], {nullable:false})
    by!: Array<`${AssignmentRequestScalarFieldEnum}`>;

    @Field(() => AssignmentRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: AssignmentRequestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AssignmentRequestCountAggregateInput, {nullable:true})
    _count?: AssignmentRequestCountAggregateInput;

    @Field(() => AssignmentRequestMinAggregateInput, {nullable:true})
    _min?: AssignmentRequestMinAggregateInput;

    @Field(() => AssignmentRequestMaxAggregateInput, {nullable:true})
    _max?: AssignmentRequestMaxAggregateInput;
}
