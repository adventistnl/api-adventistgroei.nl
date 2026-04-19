import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionCreateWithoutSubsidy_requestInput } from './budget-transaction-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { BudgetTransactionCreateOrConnectWithoutSubsidy_requestInput } from './budget-transaction-create-or-connect-without-subsidy-request.input';
import { BudgetTransactionUpsertWithWhereUniqueWithoutSubsidy_requestInput } from './budget-transaction-upsert-with-where-unique-without-subsidy-request.input';
import { BudgetTransactionCreateManySubsidy_requestInputEnvelope } from './budget-transaction-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';
import { BudgetTransactionUpdateWithWhereUniqueWithoutSubsidy_requestInput } from './budget-transaction-update-with-where-unique-without-subsidy-request.input';
import { BudgetTransactionUpdateManyWithWhereWithoutSubsidy_requestInput } from './budget-transaction-update-many-with-where-without-subsidy-request.input';
import { BudgetTransactionScalarWhereInput } from './budget-transaction-scalar-where.input';

@InputType()
export class BudgetTransactionUncheckedUpdateManyWithoutSubsidy_requestNestedInput {

    @Field(() => [BudgetTransactionCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => BudgetTransactionCreateWithoutSubsidy_requestInput)
    create?: Array<BudgetTransactionCreateWithoutSubsidy_requestInput>;

    @Field(() => [BudgetTransactionCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => BudgetTransactionCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<BudgetTransactionCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => [BudgetTransactionUpsertWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => BudgetTransactionUpsertWithWhereUniqueWithoutSubsidy_requestInput)
    upsert?: Array<BudgetTransactionUpsertWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => BudgetTransactionCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => BudgetTransactionCreateManySubsidy_requestInputEnvelope)
    createMany?: BudgetTransactionCreateManySubsidy_requestInputEnvelope;

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

    @Field(() => [BudgetTransactionUpdateWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => BudgetTransactionUpdateWithWhereUniqueWithoutSubsidy_requestInput)
    update?: Array<BudgetTransactionUpdateWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => [BudgetTransactionUpdateManyWithWhereWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => BudgetTransactionUpdateManyWithWhereWithoutSubsidy_requestInput)
    updateMany?: Array<BudgetTransactionUpdateManyWithWhereWithoutSubsidy_requestInput>;

    @Field(() => [BudgetTransactionScalarWhereInput], {nullable:true})
    @Type(() => BudgetTransactionScalarWhereInput)
    deleteMany?: Array<BudgetTransactionScalarWhereInput>;
}
