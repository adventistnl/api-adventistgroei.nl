import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestOrderByWithAggregationInput } from './subsidy-request-order-by-with-aggregation.input';
import { SubsidyRequestScalarFieldEnum } from './subsidy-request-scalar-field.enum';
import { SubsidyRequestScalarWhereWithAggregatesInput } from './subsidy-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubsidyRequestCountAggregateInput } from './subsidy-request-count-aggregate.input';
import { SubsidyRequestAvgAggregateInput } from './subsidy-request-avg-aggregate.input';
import { SubsidyRequestSumAggregateInput } from './subsidy-request-sum-aggregate.input';
import { SubsidyRequestMinAggregateInput } from './subsidy-request-min-aggregate.input';
import { SubsidyRequestMaxAggregateInput } from './subsidy-request-max-aggregate.input';

@ArgsType()
export class SubsidyRequestGroupByArgs {

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;

    @Field(() => [SubsidyRequestOrderByWithAggregationInput], {nullable:true})
    @Type(() => SubsidyRequestOrderByWithAggregationInput)
    orderBy?: Array<SubsidyRequestOrderByWithAggregationInput>;

    @Field(() => [SubsidyRequestScalarFieldEnum], {nullable:false})
    by!: Array<`${SubsidyRequestScalarFieldEnum}`>;

    @Field(() => SubsidyRequestScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => SubsidyRequestScalarWhereWithAggregatesInput)
    having?: SubsidyRequestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubsidyRequestCountAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestCountAggregateInput)
    _count?: SubsidyRequestCountAggregateInput;

    @Field(() => SubsidyRequestAvgAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestAvgAggregateInput)
    _avg?: SubsidyRequestAvgAggregateInput;

    @Field(() => SubsidyRequestSumAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestSumAggregateInput)
    _sum?: SubsidyRequestSumAggregateInput;

    @Field(() => SubsidyRequestMinAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestMinAggregateInput)
    _min?: SubsidyRequestMinAggregateInput;

    @Field(() => SubsidyRequestMaxAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestMaxAggregateInput)
    _max?: SubsidyRequestMaxAggregateInput;
}
