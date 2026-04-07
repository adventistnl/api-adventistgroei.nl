import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransferWhereInput } from './budget-transfer-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyBudgetTransferArgs {

    @Field(() => BudgetTransferWhereInput, {nullable:true})
    @Type(() => BudgetTransferWhereInput)
    where?: BudgetTransferWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
