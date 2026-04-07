import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BudgetTransferWhereUniqueInput } from './budget-transfer-where-unique.input';
import { Type } from 'class-transformer';
import { BudgetTransferCreateInput } from './budget-transfer-create.input';
import { BudgetTransferUpdateInput } from './budget-transfer-update.input';

@ArgsType()
export class UpsertOneBudgetTransferArgs {

    @Field(() => BudgetTransferWhereUniqueInput, {nullable:false})
    @Type(() => BudgetTransferWhereUniqueInput)
    where!: Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>;

    @Field(() => BudgetTransferCreateInput, {nullable:false})
    @Type(() => BudgetTransferCreateInput)
    create!: BudgetTransferCreateInput;

    @Field(() => BudgetTransferUpdateInput, {nullable:false})
    @Type(() => BudgetTransferUpdateInput)
    update!: BudgetTransferUpdateInput;
}
