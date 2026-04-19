import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionCreateWithoutProjectInput } from './budget-transaction-create-without-project.input';
import { Type } from 'class-transformer';
import { BudgetTransactionCreateOrConnectWithoutProjectInput } from './budget-transaction-create-or-connect-without-project.input';
import { BudgetTransactionCreateManyProjectInputEnvelope } from './budget-transaction-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';

@InputType()
export class BudgetTransactionCreateNestedManyWithoutProjectInput {

    @Field(() => [BudgetTransactionCreateWithoutProjectInput], {nullable:true})
    @Type(() => BudgetTransactionCreateWithoutProjectInput)
    create?: Array<BudgetTransactionCreateWithoutProjectInput>;

    @Field(() => [BudgetTransactionCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => BudgetTransactionCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<BudgetTransactionCreateOrConnectWithoutProjectInput>;

    @Field(() => BudgetTransactionCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => BudgetTransactionCreateManyProjectInputEnvelope)
    createMany?: BudgetTransactionCreateManyProjectInputEnvelope;

    @Field(() => [BudgetTransactionWhereUniqueInput], {nullable:true})
    @Type(() => BudgetTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>>;
}
