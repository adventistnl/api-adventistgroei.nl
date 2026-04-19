import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionScalarWhereInput } from './budget-transaction-scalar-where.input';
import { Type } from 'class-transformer';
import { BudgetTransactionUpdateManyMutationInput } from './budget-transaction-update-many-mutation.input';

@InputType()
export class BudgetTransactionUpdateManyWithWhereWithoutProjectInput {

    @Field(() => BudgetTransactionScalarWhereInput, {nullable:false})
    @Type(() => BudgetTransactionScalarWhereInput)
    where!: BudgetTransactionScalarWhereInput;

    @Field(() => BudgetTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => BudgetTransactionUpdateManyMutationInput)
    data!: BudgetTransactionUpdateManyMutationInput;
}
