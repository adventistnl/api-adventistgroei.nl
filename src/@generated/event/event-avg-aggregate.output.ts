import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class EventAvgAggregate {

    @Field(() => Float, {nullable:true})
    max_participants?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    ticket_amount?: Decimal;
}
