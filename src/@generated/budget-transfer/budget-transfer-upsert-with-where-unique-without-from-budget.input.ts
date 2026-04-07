import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BudgetTransferWhereUniqueInput } from './budget-transfer-where-unique.input';
import { Type } from 'class-transformer';
import { BudgetTransferUpdateWithoutFrom_budgetInput } from './budget-transfer-update-without-from-budget.input';
import { BudgetTransferCreateWithoutFrom_budgetInput } from './budget-transfer-create-without-from-budget.input';

@InputType()
export class BudgetTransferUpsertWithWhereUniqueWithoutFrom_budgetInput {

    @Field(() => BudgetTransferWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransferWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>;

    @Field(() => BudgetTransferUpdateWithoutFrom_budgetInput, {nullable:false})
    @Type(() => BudgetTransferUpdateWithoutFrom_budgetInput)
    update!: BudgetTransferUpdateWithoutFrom_budgetInput;

    @Field(() => BudgetTransferCreateWithoutFrom_budgetInput, {nullable:false})
    @Type(() => BudgetTransferCreateWithoutFrom_budgetInput)
    create!: BudgetTransferCreateWithoutFrom_budgetInput;
}
