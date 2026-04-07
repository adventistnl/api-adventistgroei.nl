import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransferCreateManyInput } from './budget-transfer-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBudgetTransferArgs {

    @Field(() => [BudgetTransferCreateManyInput], {nullable:false})
    @Type(() => BudgetTransferCreateManyInput)
    data!: Array<BudgetTransferCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
