import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ActivityFundingSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    entity_contribution_amount?: Decimal;

    @Field(() => Float, {nullable:true})
    entity_contribution_percent?: number;
}
