import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BudgetTransferWhereUniqueInput } from './budget-transfer-where-unique.input';
import { Type } from 'class-transformer';
import { BudgetTransferUpdateWithoutTo_budgetInput } from './budget-transfer-update-without-to-budget.input';
import { BudgetTransferCreateWithoutTo_budgetInput } from './budget-transfer-create-without-to-budget.input';

@InputType()
export class BudgetTransferUpsertWithWhereUniqueWithoutTo_budgetInput {

    @Field(() => BudgetTransferWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransferWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>;

    @Field(() => BudgetTransferUpdateWithoutTo_budgetInput, {nullable:false})
    @Type(() => BudgetTransferUpdateWithoutTo_budgetInput)
    update!: BudgetTransferUpdateWithoutTo_budgetInput;

    @Field(() => BudgetTransferCreateWithoutTo_budgetInput, {nullable:false})
    @Type(() => BudgetTransferCreateWithoutTo_budgetInput)
    create!: BudgetTransferCreateWithoutTo_budgetInput;
}
