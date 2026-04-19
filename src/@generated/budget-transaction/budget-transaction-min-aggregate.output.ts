import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BudgetTransactionType } from '../prisma/budget-transaction-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class BudgetTransactionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    annual_budget_id?: string;

    @Field(() => BudgetTransactionType, {nullable:true})
    type?: `${BudgetTransactionType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    delta_allocated?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    delta_expenses?: Decimal;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    project_id?: string;

    @Field(() => String, {nullable:true})
    subsidy_request_id?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
