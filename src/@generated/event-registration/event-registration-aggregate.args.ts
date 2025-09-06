import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRegistrationWhereInput } from './event-registration-where.input';
import { Type } from 'class-transformer';
import { EventRegistrationOrderByWithRelationInput } from './event-registration-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventRegistrationWhereUniqueInput } from './event-registration-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventRegistrationCountAggregateInput } from './event-registration-count-aggregate.input';
import { EventRegistrationMinAggregateInput } from './event-registration-min-aggregate.input';
import { EventRegistrationMaxAggregateInput } from './event-registration-max-aggregate.input';

@ArgsType()
export class EventRegistrationAggregateArgs {

    @Field(() => EventRegistrationWhereInput, {nullable:true})
    @Type(() => EventRegistrationWhereInput)
    where?: EventRegistrationWhereInput;

    @Field(() => [EventRegistrationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventRegistrationOrderByWithRelationInput>;

    @Field(() => EventRegistrationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventRegistrationWhereUniqueInput, 'id'>;

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
