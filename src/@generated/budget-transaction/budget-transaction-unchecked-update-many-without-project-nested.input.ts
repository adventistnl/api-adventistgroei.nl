import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionCreateWithoutProjectInput } from './budget-transaction-create-without-project.input';
import { Type } from 'class-transformer';
import { BudgetTransactionCreateOrConnectWithoutProjectInput } from './budget-transaction-create-or-connect-without-project.input';
import { BudgetTransactionUpsertWithWhereUniqueWithoutProjectInput } from './budget-transaction-upsert-with-where-unique-without-project.input';
import { BudgetTransactionCreateManyProjectInputEnvelope } from './budget-transaction-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';
import { BudgetTransactionUpdateWithWhereUniqueWithoutProjectInput } from './budget-transaction-update-with-where-unique-without-project.input';
import { BudgetTransactionUpdateManyWithWhereWithoutProjectInput } from './budget-transaction-update-many-with-where-without-project.input';
import { BudgetTransactionScalarWhereInput } from './budget-transaction-scalar-where.input';

@InputType()
export class BudgetTransactionUncheckedUpdateManyWithoutProjectNestedInput {

    @Field(() => [BudgetTransactionCreateWithoutProjectInput], {nullable:true})
    @Type(() => BudgetTransactionCreateWithoutProjectInput)
    create?: Array<BudgetTransactionCreateWithoutProjectInput>;

    @Field(() => [BudgetTransactionCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => BudgetTransactionCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<BudgetTransactionCreateOrConnectWithoutProjectInput>;

    @Field(() => [BudgetTransactionUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => BudgetTransactionUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<BudgetTransactionUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => BudgetTransactionCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => BudgetTransactionCreateManyProjectInputEnvelope)
    createMany?: BudgetTransactionCreateManyProjectInputEnvelope;

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

    @Field(() => [BudgetTransactionUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => BudgetTransactionUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<BudgetTransactionUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [BudgetTransactionUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => BudgetTransactionUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<BudgetTransactionUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [BudgetTransactionScalarWhereInput], {nullable:true})
    @Type(() => BudgetTransactionScalarWhereInput)
    deleteMany?: Array<BudgetTransactionScalarWhereInput>;
}
