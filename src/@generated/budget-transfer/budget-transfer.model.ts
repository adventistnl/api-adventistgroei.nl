import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { TransferType } from '../prisma/transfer-type.enum';
import { AnnualBudget } from '../annual-budget/annual-budget.model';

@ObjectType()
export class BudgetTransfer {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    from_budget_id!: string | null;

    @Field(() => String, {nullable:true})
    to_budget_id!: string | null;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => TransferType, {nullable:false})
    type!: `${TransferType}`;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => AnnualBudget, {nullable:true})
    from_budget?: AnnualBudget | null;

    @Field(() => AnnualBudget, {nullable:true})
    to_budget?: AnnualBudget | null;
}
