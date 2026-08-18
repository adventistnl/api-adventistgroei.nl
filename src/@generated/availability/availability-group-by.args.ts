import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityWhereInput } from './availability-where.input';
import { Type } from 'class-transformer';
import { AvailabilityOrderByWithAggregationInput } from './availability-order-by-with-aggregation.input';
import { AvailabilityScalarFieldEnum } from './availability-scalar-field.enum';
import { AvailabilityScalarWhereWithAggregatesInput } from './availability-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AvailabilityCountAggregateInput } from './availability-count-aggregate.input';
import { AvailabilityMinAggregateInput } from './availability-min-aggregate.input';
import { AvailabilityMaxAggregateInput } from './availability-max-aggregate.input';

@ArgsType()
export class AvailabilityGroupByArgs {

    @Field(() => AvailabilityWhereInput, {nullable:true})
    @Type(() => AvailabilityWhereInput)
    where?: AvailabilityWhereInput;

    @Field(() => [AvailabilityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AvailabilityOrderByWithAggregationInput>;

    @Field(() => [AvailabilityScalarFieldEnum], {nullable:false})
    by!: Array<`${AvailabilityScalarFieldEnum}`>;

    @Field(() => AvailabilityScalarWhereWithAggregatesInput, {nullable:true})
    having?: AvailabilityScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AvailabilityCountAggregateInput, {nullable:true})
    _count?: AvailabilityCountAggregateInput;

    @Field(() => AvailabilityMinAggregateInput, {nullable:true})
    _min?: AvailabilityMinAggregateInput;

    @Field(() => AvailabilityMaxAggregateInput, {nullable:true})
    _max?: AvailabilityMaxAggregateInput;
}
