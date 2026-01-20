import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestItemWhereInput } from './subsidy-request-item-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemOrderByWithAggregationInput } from './subsidy-request-item-order-by-with-aggregation.input';
import { SubsidyRequestItemScalarFieldEnum } from './subsidy-request-item-scalar-field.enum';
import { SubsidyRequestItemScalarWhereWithAggregatesInput } from './subsidy-request-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubsidyRequestItemCountAggregateInput } from './subsidy-request-item-count-aggregate.input';
import { SubsidyRequestItemAvgAggregateInput } from './subsidy-request-item-avg-aggregate.input';
import { SubsidyRequestItemSumAggregateInput } from './subsidy-request-item-sum-aggregate.input';
import { SubsidyRequestItemMinAggregateInput } from './subsidy-request-item-min-aggregate.input';
import { SubsidyRequestItemMaxAggregateInput } from './subsidy-request-item-max-aggregate.input';

@ArgsType()
export class SubsidyRequestItemGroupByArgs {

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    where?: SubsidyRequestItemWhereInput;

    @Field(() => [SubsidyRequestItemOrderByWithAggregationInput], {nullable:true})
    @Type(() => SubsidyRequestItemOrderByWithAggregationInput)
    orderBy?: Array<SubsidyRequestItemOrderByWithAggregationInput>;

    @Field(() => [SubsidyRequestItemScalarFieldEnum], {nullable:false})
    by!: Array<`${SubsidyRequestItemScalarFieldEnum}`>;

    @Field(() => SubsidyRequestItemScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => SubsidyRequestItemScalarWhereWithAggregatesInput)
    having?: SubsidyRequestItemScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubsidyRequestItemCountAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestItemCountAggregateInput)
    _count?: SubsidyRequestItemCountAggregateInput;

    @Field(() => SubsidyRequestItemAvgAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestItemAvgAggregateInput)
    _avg?: SubsidyRequestItemAvgAggregateInput;

    @Field(() => SubsidyRequestItemSumAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestItemSumAggregateInput)
    _sum?: SubsidyRequestItemSumAggregateInput;

    @Field(() => SubsidyRequestItemMinAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestItemMinAggregateInput)
    _min?: SubsidyRequestItemMinAggregateInput;

    @Field(() => SubsidyRequestItemMaxAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestItemMaxAggregateInput)
    _max?: SubsidyRequestItemMaxAggregateInput;
}
