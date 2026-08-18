import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentWhereInput } from './assignment-where.input';
import { Type } from 'class-transformer';
import { AssignmentOrderByWithAggregationInput } from './assignment-order-by-with-aggregation.input';
import { AssignmentScalarFieldEnum } from './assignment-scalar-field.enum';
import { AssignmentScalarWhereWithAggregatesInput } from './assignment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AssignmentCountAggregateInput } from './assignment-count-aggregate.input';
import { AssignmentMinAggregateInput } from './assignment-min-aggregate.input';
import { AssignmentMaxAggregateInput } from './assignment-max-aggregate.input';

@ArgsType()
export class AssignmentGroupByArgs {

    @Field(() => AssignmentWhereInput, {nullable:true})
    @Type(() => AssignmentWhereInput)
    where?: AssignmentWhereInput;

    @Field(() => [AssignmentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AssignmentOrderByWithAggregationInput>;

    @Field(() => [AssignmentScalarFieldEnum], {nullable:false})
    by!: Array<`${AssignmentScalarFieldEnum}`>;

    @Field(() => AssignmentScalarWhereWithAggregatesInput, {nullable:true})
    having?: AssignmentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AssignmentCountAggregateInput, {nullable:true})
    _count?: AssignmentCountAggregateInput;

    @Field(() => AssignmentMinAggregateInput, {nullable:true})
    _min?: AssignmentMinAggregateInput;

    @Field(() => AssignmentMaxAggregateInput, {nullable:true})
    _max?: AssignmentMaxAggregateInput;
}
