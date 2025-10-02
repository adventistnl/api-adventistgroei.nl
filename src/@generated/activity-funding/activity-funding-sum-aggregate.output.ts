import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ActivityFundingSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    entity_contribution_amount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    entity_contribution_percent?: Decimal;
}
