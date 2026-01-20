import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundingPoliciesWhereInput } from './funding-policies-where.input';
import { Type } from 'class-transformer';
import { FundingPoliciesOrderByWithRelationInput } from './funding-policies-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FundingPoliciesWhereUniqueInput } from './funding-policies-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FundingPoliciesCountAggregateInput } from './funding-policies-count-aggregate.input';
import { FundingPoliciesAvgAggregateInput } from './funding-policies-avg-aggregate.input';
import { FundingPoliciesSumAggregateInput } from './funding-policies-sum-aggregate.input';
import { FundingPoliciesMinAggregateInput } from './funding-policies-min-aggregate.input';
import { FundingPoliciesMaxAggregateInput } from './funding-policies-max-aggregate.input';

@ArgsType()
export class FundingPoliciesAggregateArgs {

    @Field(() => FundingPoliciesWhereInput, {nullable:true})
    @Type(() => FundingPoliciesWhereInput)
    where?: FundingPoliciesWhereInput;

    @Field(() => [FundingPoliciesOrderByWithRelationInput], {nullable:true})
    @Type(() => FundingPoliciesOrderByWithRelationInput)
    orderBy?: Array<FundingPoliciesOrderByWithRelationInput>;

    @Field(() => FundingPoliciesWhereUniqueInput, {nullable:true})
    @Type(() => FundingPoliciesWhereUniqueInput)
    cursor?: Prisma.AtLeast<FundingPoliciesWhereUniqueInput, 'id'>;

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
