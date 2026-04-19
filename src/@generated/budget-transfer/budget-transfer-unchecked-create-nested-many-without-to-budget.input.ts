import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransferCreateWithoutTo_budgetInput } from './budget-transfer-create-without-to-budget.input';
import { Type } from 'class-transformer';
import { BudgetTransferCreateOrConnectWithoutTo_budgetInput } from './budget-transfer-create-or-connect-without-to-budget.input';
import { BudgetTransferCreateManyTo_budgetInputEnvelope } from './budget-transfer-create-many-to-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BudgetTransferWhereUniqueInput } from './budget-transfer-where-unique.input';

@InputType()
export class BudgetTransferUncheckedCreateNestedManyWithoutTo_budgetInput {

    @Field(() => [BudgetTransferCreateWithoutTo_budgetInput], {nullable:true})
    @Type(() => BudgetTransferCreateWithoutTo_budgetInput)
    create?: Array<BudgetTransferCreateWithoutTo_budgetInput>;

    @Field(() => [BudgetTransferCreateOrConnectWithoutTo_budgetInput], {nullable:true})
    @Type(() => BudgetTransferCreateOrConnectWithoutTo_budgetInput)
    connectOrCreate?: Array<BudgetTransferCreateOrConnectWithoutTo_budgetInput>;

    @Field(() => BudgetTransferCreateManyTo_budgetInputEnvelope, {nullable:true})
    @Type(() => BudgetTransferCreateManyTo_budgetInputEnvelope)
    createMany?: BudgetTransferCreateManyTo_budgetInputEnvelope;

    @Field(() => [BudgetTransferWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransferWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>>;
}
