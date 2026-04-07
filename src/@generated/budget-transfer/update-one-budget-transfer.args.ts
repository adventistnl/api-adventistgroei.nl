import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransferUpdateInput } from './budget-transfer-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BudgetTransferWhereUniqueInput } from './budget-transfer-where-unique.input';

@ArgsType()
export class UpdateOneBudgetTransferArgs {

    @Field(() => BudgetTransferUpdateInput, {nullable:false})
    @Type(() => BudgetTransferUpdateInput)
    data!: BudgetTransferUpdateInput;

    @Field(() => BudgetTransferWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransferWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>;
}
