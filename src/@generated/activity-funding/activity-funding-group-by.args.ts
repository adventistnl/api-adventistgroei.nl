import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityFundingWhereInput } from './activity-funding-where.input';
import { Type } from 'class-transformer';
import { ActivityFundingOrderByWithAggregationInput } from './activity-funding-order-by-with-aggregation.input';
import { ActivityFundingScalarFieldEnum } from './activity-funding-scalar-field.enum';
import { ActivityFundingScalarWhereWithAggregatesInput } from './activity-funding-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ActivityFundingCountAggregateInput } from './activity-funding-count-aggregate.input';
import { ActivityFundingAvgAggregateInput } from './activity-funding-avg-aggregate.input';
import { ActivityFundingSumAggregateInput } from './activity-funding-sum-aggregate.input';
import { ActivityFundingMinAggregateInput } from './activity-funding-min-aggregate.input';
import { ActivityFundingMaxAggregateInput } from './activity-funding-max-aggregate.input';

@ArgsType()
export class ActivityFundingGroupByArgs {

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    where?: ActivityFundingWhereInput;

    @Field(() => [ActivityFundingOrderByWithAggregationInput], {nullable:true})
    @Type(() => ActivityFundingOrderByWithAggregationInput)
    orderBy?: Array<ActivityFundingOrderByWithAggregationInput>;

    @Field(() => [ActivityFundingScalarFieldEnum], {nullable:false})
    by!: Array<`${ActivityFundingScalarFieldEnum}`>;

    @Field(() => ActivityFundingScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => ActivityFundingScalarWhereWithAggregatesInput)
    having?: ActivityFundingScalarWhereWithAggregatesInput;

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
