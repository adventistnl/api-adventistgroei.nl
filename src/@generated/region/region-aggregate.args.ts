import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionWhereInput } from './region-where.input';
import { Type } from 'class-transformer';
import { RegionOrderByWithRelationInput } from './region-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RegionCountAggregateInput } from './region-count-aggregate.input';
import { RegionMinAggregateInput } from './region-min-aggregate.input';
import { RegionMaxAggregateInput } from './region-max-aggregate.input';

@ArgsType()
export class RegionAggregateArgs {

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;

    @Field(() => [RegionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RegionOrderByWithRelationInput>;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RegionCountAggregateInput, {nullable:true})
    _count?: RegionCountAggregateInput;

    @Field(() => RegionMinAggregateInput, {nullable:true})
    _min?: RegionMinAggregateInput;

    @Field(() => RegionMaxAggregateInput, {nullable:true})
    _max?: RegionMaxAggregateInput;
}
