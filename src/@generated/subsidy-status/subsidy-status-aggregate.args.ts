import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';
import { Type } from 'class-transformer';
import { SubsidyStatusOrderByWithRelationInput } from './subsidy-status-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubsidyStatusCountAggregateInput } from './subsidy-status-count-aggregate.input';
import { SubsidyStatusAvgAggregateInput } from './subsidy-status-avg-aggregate.input';
import { SubsidyStatusSumAggregateInput } from './subsidy-status-sum-aggregate.input';
import { SubsidyStatusMinAggregateInput } from './subsidy-status-min-aggregate.input';
import { SubsidyStatusMaxAggregateInput } from './subsidy-status-max-aggregate.input';

@ArgsType()
export class SubsidyStatusAggregateArgs {

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;

    @Field(() => [SubsidyStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubsidyStatusOrderByWithRelationInput>;

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubsidyStatusCountAggregateInput, {nullable:true})
    _count?: SubsidyStatusCountAggregateInput;

    @Field(() => SubsidyStatusAvgAggregateInput, {nullable:true})
    _avg?: SubsidyStatusAvgAggregateInput;

    @Field(() => SubsidyStatusSumAggregateInput, {nullable:true})
    _sum?: SubsidyStatusSumAggregateInput;

    @Field(() => SubsidyStatusMinAggregateInput, {nullable:true})
    _min?: SubsidyStatusMinAggregateInput;

    @Field(() => SubsidyStatusMaxAggregateInput, {nullable:true})
    _max?: SubsidyStatusMaxAggregateInput;
}
