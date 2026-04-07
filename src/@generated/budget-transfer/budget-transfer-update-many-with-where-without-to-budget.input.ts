import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransferScalarWhereInput } from './budget-transfer-scalar-where.input';
import { Type } from 'class-transformer';
import { BudgetTransferUpdateManyMutationInput } from './budget-transfer-update-many-mutation.input';

@InputType()
export class BudgetTransferUpdateManyWithWhereWithoutTo_budgetInput {

    @Field(() => BudgetTransferScalarWhereInput, {nullable:false})
    @Type(() => BudgetTransferScalarWhereInput)
    where!: BudgetTransferScalarWhereInput;

    @Field(() => BudgetTransferUpdateManyMutationInput, {nullable:false})
    @Type(() => BudgetTransferUpdateManyMutationInput)
    data!: BudgetTransferUpdateManyMutationInput;
}
