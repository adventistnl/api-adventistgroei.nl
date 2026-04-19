import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransferCreateWithoutFrom_budgetInput } from './budget-transfer-create-without-from-budget.input';
import { Type } from 'class-transformer';
import { BudgetTransferCreateOrConnectWithoutFrom_budgetInput } from './budget-transfer-create-or-connect-without-from-budget.input';
import { BudgetTransferUpsertWithWhereUniqueWithoutFrom_budgetInput } from './budget-transfer-upsert-with-where-unique-without-from-budget.input';
import { BudgetTransferCreateManyFrom_budgetInputEnvelope } from './budget-transfer-create-many-from-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BudgetTransferWhereUniqueInput } from './budget-transfer-where-unique.input';
import { BudgetTransferUpdateWithWhereUniqueWithoutFrom_budgetInput } from './budget-transfer-update-with-where-unique-without-from-budget.input';
import { BudgetTransferUpdateManyWithWhereWithoutFrom_budgetInput } from './budget-transfer-update-many-with-where-without-from-budget.input';
import { BudgetTransferScalarWhereInput } from './budget-transfer-scalar-where.input';

@InputType()
export class BudgetTransferUncheckedUpdateManyWithoutFrom_budgetNestedInput {

    @Field(() => [BudgetTransferCreateWithoutFrom_budgetInput], {nullable:true})
    @Type(() => BudgetTransferCreateWithoutFrom_budgetInput)
    create?: Array<BudgetTransferCreateWithoutFrom_budgetInput>;

    @Field(() => [BudgetTransferCreateOrConnectWithoutFrom_budgetInput], {nullable:true})
    @Type(() => BudgetTransferCreateOrConnectWithoutFrom_budgetInput)
    connectOrCreate?: Array<BudgetTransferCreateOrConnectWithoutFrom_budgetInput>;

    @Field(() => [BudgetTransferUpsertWithWhereUniqueWithoutFrom_budgetInput], {nullable:true})
    @Type(() => BudgetTransferUpsertWithWhereUniqueWithoutFrom_budgetInput)
    upsert?: Array<BudgetTransferUpsertWithWhereUniqueWithoutFrom_budgetInput>;

    @Field(() => BudgetTransferCreateManyFrom_budgetInputEnvelope, {nullable:true})
    @Type(() => BudgetTransferCreateManyFrom_budgetInputEnvelope)
    createMany?: BudgetTransferCreateManyFrom_budgetInputEnvelope;

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

    @Field(() => [BudgetTransferUpdateWithWhereUniqueWithoutFrom_budgetInput], {nullable:true})
    @Type(() => BudgetTransferUpdateWithWhereUniqueWithoutFrom_budgetInput)
    update?: Array<BudgetTransferUpdateWithWhereUniqueWithoutFrom_budgetInput>;

    @Field(() => [BudgetTransferUpdateManyWithWhereWithoutFrom_budgetInput], {nullable:true})
    @Type(() => BudgetTransferUpdateManyWithWhereWithoutFrom_budgetInput)
    updateMany?: Array<BudgetTransferUpdateManyWithWhereWithoutFrom_budgetInput>;

    @Field(() => [BudgetTransferScalarWhereInput], {nullable:true})
    @Type(() => BudgetTransferScalarWhereInput)
    deleteMany?: Array<BudgetTransferScalarWhereInput>;
}
