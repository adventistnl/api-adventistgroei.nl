import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { BudgetTransactionCreateWithoutSubsidy_requestInput } from './budget-transaction-create-without-subsidy-request.input';

@InputType()
export class BudgetTransactionCreateOrConnectWithoutSubsidy_requestInput {

    @Field(() => BudgetTransactionWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>;

    @Field(() => BudgetTransactionCreateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => BudgetTransactionCreateWithoutSubsidy_requestInput)
    create!: BudgetTransactionCreateWithoutSubsidy_requestInput;
}
