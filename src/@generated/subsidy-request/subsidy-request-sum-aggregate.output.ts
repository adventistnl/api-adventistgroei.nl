import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class SubsidyRequestSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    total_budget?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    approved_amount?: Decimal;
}
