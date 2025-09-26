import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnnualBudgetCount {

    @Field(() => Int, {nullable:false})
    institutions?: number;

    @Field(() => Int, {nullable:false})
    regions?: number;

    @Field(() => Int, {nullable:false})
    churches?: number;

    @Field(() => Int, {nullable:false})
    departments?: number;
}
