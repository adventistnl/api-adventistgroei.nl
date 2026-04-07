import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransferCreateWithoutFrom_budgetInput } from './budget-transfer-create-without-from-budget.input';
import { Type } from 'class-transformer';
import { BudgetTransferCreateOrConnectWithoutFrom_budgetInput } from './budget-transfer-create-or-connect-without-from-budget.input';
import { BudgetTransferCreateManyFrom_budgetInputEnvelope } from './budget-transfer-create-many-from-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BudgetTransferWhereUniqueInput } from './budget-transfer-where-unique.input';

@InputType()
export class BudgetTransferCreateNestedManyWithoutFrom_budgetInput {

    @Field(() => [BudgetTransferCreateWithoutFrom_budgetInput], {nullable:true})
    @Type(() => BudgetTransferCreateWithoutFrom_budgetInput)
    create?: Array<BudgetTransferCreateWithoutFrom_budgetInput>;

    @Field(() => [BudgetTransferCreateOrConnectWithoutFrom_budgetInput], {nullable:true})
    @Type(() => BudgetTransferCreateOrConnectWithoutFrom_budgetInput)
    connectOrCreate?: Array<BudgetTransferCreateOrConnectWithoutFrom_budgetInput>;

    @Field(() => BudgetTransferCreateManyFrom_budgetInputEnvelope, {nullable:true})
    @Type(() => BudgetTransferCreateManyFrom_budgetInputEnvelope)
    createMany?: BudgetTransferCreateManyFrom_budgetInputEnvelope;

    @Field(() => [BudgetTransferWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransferWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>>;
}
