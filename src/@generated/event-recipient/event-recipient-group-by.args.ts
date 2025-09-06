import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRecipientWhereInput } from './event-recipient-where.input';
import { Type } from 'class-transformer';
import { EventRecipientOrderByWithAggregationInput } from './event-recipient-order-by-with-aggregation.input';
import { EventRecipientScalarFieldEnum } from './event-recipient-scalar-field.enum';
import { EventRecipientScalarWhereWithAggregatesInput } from './event-recipient-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EventRecipientCountAggregateInput } from './event-recipient-count-aggregate.input';
import { EventRecipientMinAggregateInput } from './event-recipient-min-aggregate.input';
import { EventRecipientMaxAggregateInput } from './event-recipient-max-aggregate.input';

@ArgsType()
export class EventRecipientGroupByArgs {

    @Field(() => EventRecipientWhereInput, {nullable:true})
    @Type(() => EventRecipientWhereInput)
    where?: EventRecipientWhereInput;

    @Field(() => [EventRecipientOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EventRecipientOrderByWithAggregationInput>;

    @Field(() => [EventRecipientScalarFieldEnum], {nullable:false})
    by!: Array<`${EventRecipientScalarFieldEnum}`>;

    @Field(() => EventRecipientScalarWhereWithAggregatesInput, {nullable:true})
    having?: EventRecipientScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventRecipientCountAggregateInput, {nullable:true})
    _count?: EventRecipientCountAggregateInput;

    @Field(() => EventRecipientMinAggregateInput, {nullable:true})
    _min?: EventRecipientMinAggregateInput;

    @Field(() => EventRecipientMaxAggregateInput, {nullable:true})
    _max?: EventRecipientMaxAggregateInput;
}
