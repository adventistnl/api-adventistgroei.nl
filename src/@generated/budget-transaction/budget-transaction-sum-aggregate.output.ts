import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class BudgetTransactionSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    delta_allocated?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    delta_expenses?: Decimal;
}
