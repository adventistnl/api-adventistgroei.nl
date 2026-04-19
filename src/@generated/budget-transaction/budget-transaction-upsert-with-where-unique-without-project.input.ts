import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { BudgetTransactionUpdateWithoutProjectInput } from './budget-transaction-update-without-project.input';
import { BudgetTransactionCreateWithoutProjectInput } from './budget-transaction-create-without-project.input';

@InputType()
export class BudgetTransactionUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => BudgetTransactionWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>;

    @Field(() => BudgetTransactionUpdateWithoutProjectInput, {nullable:false})
    @Type(() => BudgetTransactionUpdateWithoutProjectInput)
    update!: BudgetTransactionUpdateWithoutProjectInput;

    @Field(() => BudgetTransactionCreateWithoutProjectInput, {nullable:false})
    @Type(() => BudgetTransactionCreateWithoutProjectInput)
    create!: BudgetTransactionCreateWithoutProjectInput;
}
