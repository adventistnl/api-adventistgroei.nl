import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransferUpdateManyMutationInput } from './budget-transfer-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BudgetTransferWhereInput } from './budget-transfer-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyBudgetTransferArgs {

    @Field(() => BudgetTransferUpdateManyMutationInput, {nullable:false})
    @Type(() => BudgetTransferUpdateManyMutationInput)
    data!: BudgetTransferUpdateManyMutationInput;

    @Field(() => BudgetTransferWhereInput, {nullable:true})
    @Type(() => BudgetTransferWhereInput)
    where?: BudgetTransferWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
