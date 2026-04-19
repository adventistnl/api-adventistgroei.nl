import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionCreateManyProjectInput } from './budget-transaction-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class BudgetTransactionCreateManyProjectInputEnvelope {

    @Field(() => [BudgetTransactionCreateManyProjectInput], {nullable:false})
    @Type(() => BudgetTransactionCreateManyProjectInput)
    data!: Array<BudgetTransactionCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
