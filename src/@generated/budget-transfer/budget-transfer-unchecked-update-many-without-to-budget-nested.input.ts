import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransferCreateWithoutTo_budgetInput } from './budget-transfer-create-without-to-budget.input';
import { Type } from 'class-transformer';
import { BudgetTransferCreateOrConnectWithoutTo_budgetInput } from './budget-transfer-create-or-connect-without-to-budget.input';
import { BudgetTransferUpsertWithWhereUniqueWithoutTo_budgetInput } from './budget-transfer-upsert-with-where-unique-without-to-budget.input';
import { BudgetTransferCreateManyTo_budgetInputEnvelope } from './budget-transfer-create-many-to-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BudgetTransferWhereUniqueInput } from './budget-transfer-where-unique.input';
import { BudgetTransferUpdateWithWhereUniqueWithoutTo_budgetInput } from './budget-transfer-update-with-where-unique-without-to-budget.input';
import { BudgetTransferUpdateManyWithWhereWithoutTo_budgetInput } from './budget-transfer-update-many-with-where-without-to-budget.input';
import { BudgetTransferScalarWhereInput } from './budget-transfer-scalar-where.input';

@InputType()
export class BudgetTransferUncheckedUpdateManyWithoutTo_budgetNestedInput {

    @Field(() => [BudgetTransferCreateWithoutTo_budgetInput], {nullable:true})
    @Type(() => BudgetTransferCreateWithoutTo_budgetInput)
    create?: Array<BudgetTransferCreateWithoutTo_budgetInput>;

    @Field(() => [BudgetTransferCreateOrConnectWithoutTo_budgetInput], {nullable:true})
    @Type(() => BudgetTransferCreateOrConnectWithoutTo_budgetInput)
    connectOrCreate?: Array<BudgetTransferCreateOrConnectWithoutTo_budgetInput>;

    @Field(() => [BudgetTransferUpsertWithWhereUniqueWithoutTo_budgetInput], {nullable:true})
    @Type(() => BudgetTransferUpsertWithWhereUniqueWithoutTo_budgetInput)
    upsert?: Array<BudgetTransferUpsertWithWhereUniqueWithoutTo_budgetInput>;

    @Field(() => BudgetTransferCreateManyTo_budgetInputEnvelope, {nullable:true})
    @Type(() => BudgetTransferCreateManyTo_budgetInputEnvelope)
    createMany?: BudgetTransferCreateManyTo_budgetInputEnvelope;

    @Field(() => [BudgetTransferWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransferWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>>;

    @Field(() => [BudgetTransferWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransferWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>>;

    @Field(() => [BudgetTransferWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransferWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>>;

    @Field(() => [BudgetTransferWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransferWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>>;

    @Field(() => [BudgetTransferUpdateWithWhereUniqueWithoutTo_budgetInput], {nullable:true})
    @Type(() => BudgetTransferUpdateWithWhereUniqueWithoutTo_budgetInput)
    update?: Array<BudgetTransferUpdateWithWhereUniqueWithoutTo_budgetInput>;

    @Field(() => [BudgetTransferUpdateManyWithWhereWithoutTo_budgetInput], {nullable:true})
    @Type(() => BudgetTransferUpdateManyWithWhereWithoutTo_budgetInput)
    updateMany?: Array<BudgetTransferUpdateManyWithWhereWithoutTo_budgetInput>;

    @Field(() => [BudgetTransferScalarWhereInput], {nullable:true})
    @Type(() => BudgetTransferScalarWhereInput)
    deleteMany?: Array<BudgetTransferScalarWhereInput>;
}
