import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransferWhereInput } from './budget-transfer-where.input';
import { Type } from 'class-transformer';
import { BudgetTransferOrderByWithRelationInput } from './budget-transfer-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BudgetTransferWhereUniqueInput } from './budget-transfer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BudgetTransferScalarFieldEnum } from './budget-transfer-scalar-field.enum';

@ArgsType()
export class FindFirstBudgetTransferArgs {

    @Field(() => BudgetTransferWhereInput, {nullable:true})
    @Type(() => BudgetTransferWhereInput)
    where?: BudgetTransferWhereInput;

    @Field(() => [BudgetTransferOrderByWithRelationInput], {nullable:true})
    @Type(() => BudgetTransferOrderByWithRelationInput)
    orderBy?: Array<BudgetTransferOrderByWithRelationInput>;

    @Field(() => BudgetTransferWhereUniqueInput, {nullable:true})
    @Type(() => BudgetTransferWhereUniqueInput)
    cursor?: Prisma.AtLeast<BudgetTransferWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BudgetTransferScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BudgetTransferScalarFieldEnum}`>;
}
