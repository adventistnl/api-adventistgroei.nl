import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityHistoryWhereInput } from './availability-history-where.input';
import { Type } from 'class-transformer';
import { AvailabilityHistoryOrderByWithRelationInput } from './availability-history-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AvailabilityHistoryWhereUniqueInput } from './availability-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AvailabilityHistoryCountAggregateInput } from './availability-history-count-aggregate.input';
import { AvailabilityHistoryMinAggregateInput } from './availability-history-min-aggregate.input';
import { AvailabilityHistoryMaxAggregateInput } from './availability-history-max-aggregate.input';

@ArgsType()
export class AvailabilityHistoryAggregateArgs {

    @Field(() => AvailabilityHistoryWhereInput, {nullable:true})
    @Type(() => AvailabilityHistoryWhereInput)
    where?: AvailabilityHistoryWhereInput;

    @Field(() => [AvailabilityHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AvailabilityHistoryOrderByWithRelationInput>;

    @Field(() => AvailabilityHistoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AvailabilityHistoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AvailabilityHistoryCountAggregateInput, {nullable:true})
    _count?: AvailabilityHistoryCountAggregateInput;

    @Field(() => AvailabilityHistoryMinAggregateInput, {nullable:true})
    _min?: AvailabilityHistoryMinAggregateInput;

    @Field(() => AvailabilityHistoryMaxAggregateInput, {nullable:true})
    _max?: AvailabilityHistoryMaxAggregateInput;
}
