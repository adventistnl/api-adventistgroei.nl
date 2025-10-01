import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundingPoliciesWhereInput } from './funding-policies-where.input';
import { Type } from 'class-transformer';
import { FundingPoliciesOrderByWithAggregationInput } from './funding-policies-order-by-with-aggregation.input';
import { FundingPoliciesScalarFieldEnum } from './funding-policies-scalar-field.enum';
import { FundingPoliciesScalarWhereWithAggregatesInput } from './funding-policies-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FundingPoliciesCountAggregateInput } from './funding-policies-count-aggregate.input';
import { FundingPoliciesAvgAggregateInput } from './funding-policies-avg-aggregate.input';
import { FundingPoliciesSumAggregateInput } from './funding-policies-sum-aggregate.input';
import { FundingPoliciesMinAggregateInput } from './funding-policies-min-aggregate.input';
import { FundingPoliciesMaxAggregateInput } from './funding-policies-max-aggregate.input';

@ArgsType()
export class FundingPoliciesGroupByArgs {

    @Field(() => FundingPoliciesWhereInput, {nullable:true})
    @Type(() => FundingPoliciesWhereInput)
    where?: FundingPoliciesWhereInput;

    @Field(() => [FundingPoliciesOrderByWithAggregationInput], {nullable:true})
    @Type(() => FundingPoliciesOrderByWithAggregationInput)
    orderBy?: Array<FundingPoliciesOrderByWithAggregationInput>;

    @Field(() => [FundingPoliciesScalarFieldEnum], {nullable:false})
    by!: Array<`${FundingPoliciesScalarFieldEnum}`>;

    @Field(() => FundingPoliciesScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => FundingPoliciesScalarWhereWithAggregatesInput)
    having?: FundingPoliciesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FundingPoliciesCountAggregateInput, {nullable:true})
    @Type(() => FundingPoliciesCountAggregateInput)
    _count?: FundingPoliciesCountAggregateInput;

    @Field(() => FundingPoliciesAvgAggregateInput, {nullable:true})
    @Type(() => FundingPoliciesAvgAggregateInput)
    _avg?: FundingPoliciesAvgAggregateInput;

    @Field(() => FundingPoliciesSumAggregateInput, {nullable:true})
    @Type(() => FundingPoliciesSumAggregateInput)
    _sum?: FundingPoliciesSumAggregateInput;

    @Field(() => FundingPoliciesMinAggregateInput, {nullable:true})
    @Type(() => FundingPoliciesMinAggregateInput)
    _min?: FundingPoliciesMinAggregateInput;

    @Field(() => FundingPoliciesMaxAggregateInput, {nullable:true})
    @Type(() => FundingPoliciesMaxAggregateInput)
    _max?: FundingPoliciesMaxAggregateInput;
}
