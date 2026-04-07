import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BudgetTransferWhereUniqueInput } from './budget-transfer-where-unique.input';
import { Type } from 'class-transformer';
import { BudgetTransferCreateWithoutFrom_budgetInput } from './budget-transfer-create-without-from-budget.input';

@InputType()
export class BudgetTransferCreateOrConnectWithoutFrom_budgetInput {

    @Field(() => BudgetTransferWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransferWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>;

    @Field(() => BudgetTransferCreateWithoutFrom_budgetInput, {nullable:false})
    @Type(() => BudgetTransferCreateWithoutFrom_budgetInput)
    create!: BudgetTransferCreateWithoutFrom_budgetInput;
}
