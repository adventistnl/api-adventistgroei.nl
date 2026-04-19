import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransferCreateInput } from './budget-transfer-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBudgetTransferArgs {

    @Field(() => BudgetTransferCreateInput, {nullable:false})
    @Type(() => BudgetTransferCreateInput)
    data!: BudgetTransferCreateInput;
}
