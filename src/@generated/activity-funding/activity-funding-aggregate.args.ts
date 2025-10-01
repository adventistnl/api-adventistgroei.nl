import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityFundingWhereInput } from './activity-funding-where.input';
import { Type } from 'class-transformer';
import { ActivityFundingOrderByWithRelationInput } from './activity-funding-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ActivityFundingWhereUniqueInput } from './activity-funding-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActivityFundingCountAggregateInput } from './activity-funding-count-aggregate.input';
import { ActivityFundingAvgAggregateInput } from './activity-funding-avg-aggregate.input';
import { ActivityFundingSumAggregateInput } from './activity-funding-sum-aggregate.input';
import { ActivityFundingMinAggregateInput } from './activity-funding-min-aggregate.input';
import { ActivityFundingMaxAggregateInput } from './activity-funding-max-aggregate.input';

@ArgsType()
export class ActivityFundingAggregateArgs {

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    where?: ActivityFundingWhereInput;

    @Field(() => [ActivityFundingOrderByWithRelationInput], {nullable:true})
    @Type(() => ActivityFundingOrderByWithRelationInput)
    orderBy?: Array<ActivityFundingOrderByWithRelationInput>;

    @Field(() => ActivityFundingWhereUniqueInput, {nullable:true})
    @Type(() => ActivityFundingWhereUniqueInput)
    cursor?: Prisma.AtLeast<ActivityFundingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActivityFundingCountAggregateInput, {nullable:true})
    @Type(() => ActivityFundingCountAggregateInput)
    _count?: ActivityFundingCountAggregateInput;

    @Field(() => ActivityFundingAvgAggregateInput, {nullable:true})
    @Type(() => ActivityFundingAvgAggregateInput)
    _avg?: ActivityFundingAvgAggregateInput;

    @Field(() => ActivityFundingSumAggregateInput, {nullable:true})
    @Type(() => ActivityFundingSumAggregateInput)
    _sum?: ActivityFundingSumAggregateInput;

    @Field(() => ActivityFundingMinAggregateInput, {nullable:true})
    @Type(() => ActivityFundingMinAggregateInput)
    _min?: ActivityFundingMinAggregateInput;

    @Field(() => ActivityFundingMaxAggregateInput, {nullable:true})
    @Type(() => ActivityFundingMaxAggregateInput)
    _max?: ActivityFundingMaxAggregateInput;
}
