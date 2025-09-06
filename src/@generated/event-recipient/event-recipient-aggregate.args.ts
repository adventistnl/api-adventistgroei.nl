import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRecipientWhereInput } from './event-recipient-where.input';
import { Type } from 'class-transformer';
import { EventRecipientOrderByWithRelationInput } from './event-recipient-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventRecipientWhereUniqueInput } from './event-recipient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventRecipientCountAggregateInput } from './event-recipient-count-aggregate.input';
import { EventRecipientMinAggregateInput } from './event-recipient-min-aggregate.input';
import { EventRecipientMaxAggregateInput } from './event-recipient-max-aggregate.input';

@ArgsType()
export class EventRecipientAggregateArgs {

    @Field(() => EventRecipientWhereInput, {nullable:true})
    @Type(() => EventRecipientWhereInput)
    where?: EventRecipientWhereInput;

    @Field(() => [EventRecipientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventRecipientOrderByWithRelationInput>;

    @Field(() => EventRecipientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>;

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
