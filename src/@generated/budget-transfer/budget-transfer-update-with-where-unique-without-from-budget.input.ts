import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BudgetTransferWhereUniqueInput } from './budget-transfer-where-unique.input';
import { Type } from 'class-transformer';
import { BudgetTransferUpdateWithoutFrom_budgetInput } from './budget-transfer-update-without-from-budget.input';

@InputType()
export class BudgetTransferUpdateWithWhereUniqueWithoutFrom_budgetInput {

    @Field(() => BudgetTransferWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransferWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>;

    @Field(() => BudgetTransferUpdateWithoutFrom_budgetInput, {nullable:false})
    @Type(() => BudgetTransferUpdateWithoutFrom_budgetInput)
    data!: BudgetTransferUpdateWithoutFrom_budgetInput;
}
