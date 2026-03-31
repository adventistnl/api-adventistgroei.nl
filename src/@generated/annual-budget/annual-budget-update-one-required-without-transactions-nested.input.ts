import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutTransactionsInput } from './annual-budget-create-without-transactions.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutTransactionsInput } from './annual-budget-create-or-connect-without-transactions.input';
import { AnnualBudgetUpsertWithoutTransactionsInput } from './annual-budget-upsert-without-transactions.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateToOneWithWhereWithoutTransactionsInput } from './annual-budget-update-to-one-with-where-without-transactions.input';

@InputType()
export class AnnualBudgetUpdateOneRequiredWithoutTransactionsNestedInput {

    @Field(() => AnnualBudgetCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutTransactionsInput)
    create?: AnnualBudgetCreateWithoutTransactionsInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutTransactionsInput;

    @Field(() => AnnualBudgetUpsertWithoutTransactionsInput, {nullable:true})
    @Type(() => AnnualBudgetUpsertWithoutTransactionsInput)
    upsert?: AnnualBudgetUpsertWithoutTransactionsInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateToOneWithWhereWithoutTransactionsInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateToOneWithWhereWithoutTransactionsInput)
    update?: AnnualBudgetUpdateToOneWithWhereWithoutTransactionsInput;
}
