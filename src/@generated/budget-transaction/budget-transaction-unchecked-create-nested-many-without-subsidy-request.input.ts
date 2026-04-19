import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionCreateWithoutSubsidy_requestInput } from './budget-transaction-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { BudgetTransactionCreateOrConnectWithoutSubsidy_requestInput } from './budget-transaction-create-or-connect-without-subsidy-request.input';
import { BudgetTransactionCreateManySubsidy_requestInputEnvelope } from './budget-transaction-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';

@InputType()
export class BudgetTransactionUncheckedCreateNestedManyWithoutSubsidy_requestInput {

    @Field(() => [BudgetTransactionCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => BudgetTransactionCreateWithoutSubsidy_requestInput)
    create?: Array<BudgetTransactionCreateWithoutSubsidy_requestInput>;

    @Field(() => [BudgetTransactionCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => BudgetTransactionCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<BudgetTransactionCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => BudgetTransactionCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => BudgetTransactionCreateManySubsidy_requestInputEnvelope)
    createMany?: BudgetTransactionCreateManySubsidy_requestInputEnvelope;

    @Field(() => [BudgetTransactionWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>>;
}
