import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestOrderByWithRelationInput } from './subsidy-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubsidyRequestCountAggregateInput } from './subsidy-request-count-aggregate.input';
import { SubsidyRequestAvgAggregateInput } from './subsidy-request-avg-aggregate.input';
import { SubsidyRequestSumAggregateInput } from './subsidy-request-sum-aggregate.input';
import { SubsidyRequestMinAggregateInput } from './subsidy-request-min-aggregate.input';
import { SubsidyRequestMaxAggregateInput } from './subsidy-request-max-aggregate.input';

@ArgsType()
export class SubsidyRequestAggregateArgs {

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;

    @Field(() => [SubsidyRequestOrderByWithRelationInput], {nullable:true})
    @Type(() => SubsidyRequestOrderByWithRelationInput)
    orderBy?: Array<SubsidyRequestOrderByWithRelationInput>;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    cursor?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

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
