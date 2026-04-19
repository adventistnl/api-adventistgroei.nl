import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionCreateWithoutAnnual_budgetInput } from './budget-transaction-create-without-annual-budget.input';
import { Type } from 'class-transformer';
import { BudgetTransactionCreateOrConnectWithoutAnnual_budgetInput } from './budget-transaction-create-or-connect-without-annual-budget.input';
import { BudgetTransactionUpsertWithWhereUniqueWithoutAnnual_budgetInput } from './budget-transaction-upsert-with-where-unique-without-annual-budget.input';
import { BudgetTransactionCreateManyAnnual_budgetInputEnvelope } from './budget-transaction-create-many-annual-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';
import { BudgetTransactionUpdateWithWhereUniqueWithoutAnnual_budgetInput } from './budget-transaction-update-with-where-unique-without-annual-budget.input';
import { BudgetTransactionUpdateManyWithWhereWithoutAnnual_budgetInput } from './budget-transaction-update-many-with-where-without-annual-budget.input';
import { BudgetTransactionScalarWhereInput } from './budget-transaction-scalar-where.input';

@InputType()
export class BudgetTransactionUncheckedUpdateManyWithoutAnnual_budgetNestedInput {

    @Field(() => [BudgetTransactionCreateWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => BudgetTransactionCreateWithoutAnnual_budgetInput)
    create?: Array<BudgetTransactionCreateWithoutAnnual_budgetInput>;

    @Field(() => [BudgetTransactionCreateOrConnectWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => BudgetTransactionCreateOrConnectWithoutAnnual_budgetInput)
    connectOrCreate?: Array<BudgetTransactionCreateOrConnectWithoutAnnual_budgetInput>;

    @Field(() => [BudgetTransactionUpsertWithWhereUniqueWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => BudgetTransactionUpsertWithWhereUniqueWithoutAnnual_budgetInput)
    upsert?: Array<BudgetTransactionUpsertWithWhereUniqueWithoutAnnual_budgetInput>;

    @Field(() => BudgetTransactionCreateManyAnnual_budgetInputEnvelope, {nullable:true})
    @Type(() => BudgetTransactionCreateManyAnnual_budgetInputEnvelope)
    createMany?: BudgetTransactionCreateManyAnnual_budgetInputEnvelope;

    @Field(() => [BudgetTransactionWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [BudgetTransactionWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [BudgetTransactionWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [BudgetTransactionWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [BudgetTransactionUpdateWithWhereUniqueWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => BudgetTransactionUpdateWithWhereUniqueWithoutAnnual_budgetInput)
    update?: Array<BudgetTransactionUpdateWithWhereUniqueWithoutAnnual_budgetInput>;

    @Field(() => [BudgetTransactionUpdateManyWithWhereWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => BudgetTransactionUpdateManyWithWhereWithoutAnnual_budgetInput)
    updateMany?: Array<BudgetTransactionUpdateManyWithWhereWithoutAnnual_budgetInput>;

    @Field(() => [BudgetTransactionScalarWhereInput], {nullable:true})
    @Type(() => BudgetTransactionScalarWhereInput)
    deleteMany?: Array<BudgetTransactionScalarWhereInput>;
}
