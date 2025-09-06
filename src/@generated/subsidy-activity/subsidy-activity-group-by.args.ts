import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyActivityWhereInput } from './subsidy-activity-where.input';
import { Type } from 'class-transformer';
import { SubsidyActivityOrderByWithAggregationInput } from './subsidy-activity-order-by-with-aggregation.input';
import { SubsidyActivityScalarFieldEnum } from './subsidy-activity-scalar-field.enum';
import { SubsidyActivityScalarWhereWithAggregatesInput } from './subsidy-activity-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubsidyActivityCountAggregateInput } from './subsidy-activity-count-aggregate.input';
import { SubsidyActivityAvgAggregateInput } from './subsidy-activity-avg-aggregate.input';
import { SubsidyActivitySumAggregateInput } from './subsidy-activity-sum-aggregate.input';
import { SubsidyActivityMinAggregateInput } from './subsidy-activity-min-aggregate.input';
import { SubsidyActivityMaxAggregateInput } from './subsidy-activity-max-aggregate.input';

@ArgsType()
export class SubsidyActivityGroupByArgs {

    @Field(() => SubsidyActivityWhereInput, {nullable:true})
    @Type(() => SubsidyActivityWhereInput)
    where?: SubsidyActivityWhereInput;

    @Field(() => [SubsidyActivityOrderByWithAggregationInput], {nullable:true})
    @Type(() => SubsidyActivityOrderByWithAggregationInput)
    orderBy?: Array<SubsidyActivityOrderByWithAggregationInput>;

    @Field(() => [SubsidyActivityScalarFieldEnum], {nullable:false})
    by!: Array<`${SubsidyActivityScalarFieldEnum}`>;

    @Field(() => SubsidyActivityScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => SubsidyActivityScalarWhereWithAggregatesInput)
    having?: SubsidyActivityScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubsidyActivityCountAggregateInput, {nullable:true})
    @Type(() => SubsidyActivityCountAggregateInput)
    _count?: SubsidyActivityCountAggregateInput;

    @Field(() => SubsidyActivityAvgAggregateInput, {nullable:true})
    @Type(() => SubsidyActivityAvgAggregateInput)
    _avg?: SubsidyActivityAvgAggregateInput;

    @Field(() => SubsidyActivitySumAggregateInput, {nullable:true})
    @Type(() => SubsidyActivitySumAggregateInput)
    _sum?: SubsidyActivitySumAggregateInput;

    @Field(() => SubsidyActivityMinAggregateInput, {nullable:true})
    @Type(() => SubsidyActivityMinAggregateInput)
    _min?: SubsidyActivityMinAggregateInput;

    @Field(() => SubsidyActivityMaxAggregateInput, {nullable:true})
    @Type(() => SubsidyActivityMaxAggregateInput)
    _max?: SubsidyActivityMaxAggregateInput;
}
