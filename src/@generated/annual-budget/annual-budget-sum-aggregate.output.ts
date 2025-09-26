import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class AnnualBudgetSumAggregate {

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    planned_budget?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    total_expenses?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    balance?: Decimal;
}
