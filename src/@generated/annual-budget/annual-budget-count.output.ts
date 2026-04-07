import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnnualBudgetCount {

    @Field(() => Int, {nullable:false})
    transactions?: number;

    @Field(() => Int, {nullable:false})
    transfers_out?: number;

    @Field(() => Int, {nullable:false})
    transfers_in?: number;
}
