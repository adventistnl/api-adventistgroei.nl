import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FundingPoliciesAvgAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    max_percent?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    annual_cap?: Decimal;

    @Field(() => Float, {nullable:true})
    year?: number;
}
