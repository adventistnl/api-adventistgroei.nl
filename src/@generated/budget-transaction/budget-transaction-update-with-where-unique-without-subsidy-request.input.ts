import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { BudgetTransactionUpdateWithoutSubsidy_requestInput } from './budget-transaction-update-without-subsidy-request.input';

@InputType()
export class BudgetTransactionUpdateWithWhereUniqueWithoutSubsidy_requestInput {

    @Field(() => BudgetTransactionWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>;

    @Field(() => BudgetTransactionUpdateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => BudgetTransactionUpdateWithoutSubsidy_requestInput)
    data!: BudgetTransactionUpdateWithoutSubsidy_requestInput;
}
