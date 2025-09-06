import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRegistrationWhereInput } from './event-registration-where.input';
import { Type } from 'class-transformer';
import { EventRegistrationOrderByWithAggregationInput } from './event-registration-order-by-with-aggregation.input';
import { EventRegistrationScalarFieldEnum } from './event-registration-scalar-field.enum';
import { EventRegistrationScalarWhereWithAggregatesInput } from './event-registration-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EventRegistrationCountAggregateInput } from './event-registration-count-aggregate.input';
import { EventRegistrationMinAggregateInput } from './event-registration-min-aggregate.input';
import { EventRegistrationMaxAggregateInput } from './event-registration-max-aggregate.input';

@ArgsType()
export class EventRegistrationGroupByArgs {

    @Field(() => EventRegistrationWhereInput, {nullable:true})
    @Type(() => EventRegistrationWhereInput)
    where?: EventRegistrationWhereInput;

    @Field(() => [EventRegistrationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EventRegistrationOrderByWithAggregationInput>;

    @Field(() => [EventRegistrationScalarFieldEnum], {nullable:false})
    by!: Array<`${EventRegistrationScalarFieldEnum}`>;

    @Field(() => EventRegistrationScalarWhereWithAggregatesInput, {nullable:true})
    having?: EventRegistrationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventRegistrationCountAggregateInput, {nullable:true})
    _count?: EventRegistrationCountAggregateInput;

    @Field(() => EventRegistrationMinAggregateInput, {nullable:true})
    _min?: EventRegistrationMinAggregateInput;

    @Field(() => EventRegistrationMaxAggregateInput, {nullable:true})
    _max?: EventRegistrationMaxAggregateInput;
}
