import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityHistoryWhereInput } from './availability-history-where.input';
import { Type } from 'class-transformer';
import { AvailabilityHistoryOrderByWithAggregationInput } from './availability-history-order-by-with-aggregation.input';
import { AvailabilityHistoryScalarFieldEnum } from './availability-history-scalar-field.enum';
import { AvailabilityHistoryScalarWhereWithAggregatesInput } from './availability-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AvailabilityHistoryCountAggregateInput } from './availability-history-count-aggregate.input';
import { AvailabilityHistoryMinAggregateInput } from './availability-history-min-aggregate.input';
import { AvailabilityHistoryMaxAggregateInput } from './availability-history-max-aggregate.input';

@ArgsType()
export class AvailabilityHistoryGroupByArgs {

    @Field(() => AvailabilityHistoryWhereInput, {nullable:true})
    @Type(() => AvailabilityHistoryWhereInput)
    where?: AvailabilityHistoryWhereInput;

    @Field(() => [AvailabilityHistoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AvailabilityHistoryOrderByWithAggregationInput>;

    @Field(() => [AvailabilityHistoryScalarFieldEnum], {nullable:false})
    by!: Array<`${AvailabilityHistoryScalarFieldEnum}`>;

    @Field(() => AvailabilityHistoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: AvailabilityHistoryScalarWhereWithAggregatesInput;

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
