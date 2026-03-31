import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubsidyRequestCount {

    @Field(() => Int, {nullable:false})
    items?: number;

    @Field(() => Int, {nullable:false})
    subsidy_receipts?: number;

    @Field(() => Int, {nullable:false})
    status_history?: number;

    @Field(() => Int, {nullable:false})
    budget_transactions?: number;
}
