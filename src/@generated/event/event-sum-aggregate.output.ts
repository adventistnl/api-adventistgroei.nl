import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class EventSumAggregate {

    @Field(() => Int, {nullable:true})
    max_participants?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    ticket_amount?: Decimal;
}
