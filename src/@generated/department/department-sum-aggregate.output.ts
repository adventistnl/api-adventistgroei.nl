import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DepartmentSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    annual_budget?: Decimal;
}
