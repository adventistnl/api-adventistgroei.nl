import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FundingPoliciesSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    max_percent?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    annual_cap?: Decimal;

    @Field(() => Int, {nullable:true})
    year?: number;
}
