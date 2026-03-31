import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransactionCreateManySubsidy_requestInput } from './budget-transaction-create-many-subsidy-request.input';
import { Type } from 'class-transformer';

@InputType()
export class BudgetTransactionCreateManySubsidy_requestInputEnvelope {

    @Field(() => [BudgetTransactionCreateManySubsidy_requestInput], {nullable:false})
    @Type(() => BudgetTransactionCreateManySubsidy_requestInput)
    data!: Array<BudgetTransactionCreateManySubsidy_requestInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
