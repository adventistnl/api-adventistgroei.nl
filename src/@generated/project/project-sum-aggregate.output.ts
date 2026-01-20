import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ProjectSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    budget?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    subsidized_budget?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    balance?: Decimal;
}
