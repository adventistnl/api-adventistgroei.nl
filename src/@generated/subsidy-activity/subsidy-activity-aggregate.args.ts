import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyActivityWhereInput } from './subsidy-activity-where.input';
import { Type } from 'class-transformer';
import { SubsidyActivityOrderByWithRelationInput } from './subsidy-activity-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubsidyActivityWhereUniqueInput } from './subsidy-activity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubsidyActivityCountAggregateInput } from './subsidy-activity-count-aggregate.input';
import { SubsidyActivityAvgAggregateInput } from './subsidy-activity-avg-aggregate.input';
import { SubsidyActivitySumAggregateInput } from './subsidy-activity-sum-aggregate.input';
import { SubsidyActivityMinAggregateInput } from './subsidy-activity-min-aggregate.input';
import { SubsidyActivityMaxAggregateInput } from './subsidy-activity-max-aggregate.input';

@ArgsType()
export class SubsidyActivityAggregateArgs {

    @Field(() => SubsidyActivityWhereInput, {nullable:true})
    @Type(() => SubsidyActivityWhereInput)
    where?: SubsidyActivityWhereInput;

    @Field(() => [SubsidyActivityOrderByWithRelationInput], {nullable:true})
    @Type(() => SubsidyActivityOrderByWithRelationInput)
    orderBy?: Array<SubsidyActivityOrderByWithRelationInput>;

    @Field(() => SubsidyActivityWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyActivityWhereUniqueInput)
    cursor?: Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>;

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
