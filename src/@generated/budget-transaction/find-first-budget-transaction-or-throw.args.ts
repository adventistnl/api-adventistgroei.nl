import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransactionWhereInput } from './budget-transaction-where.input';
import { Type } from 'class-transformer';
import { BudgetTransactionOrderByWithRelationInput } from './budget-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BudgetTransactionScalarFieldEnum } from './budget-transaction-scalar-field.enum';

@ArgsType()
export class FindFirstBudgetTransactionOrThrowArgs {

    @Field(() => BudgetTransactionWhereInput, {nullable:true})
    @Type(() => BudgetTransactionWhereInput)
    where?: BudgetTransactionWhereInput;

    @Field(() => [BudgetTransactionOrderByWithRelationInput], {nullable:true})
    @Type(() => BudgetTransactionOrderByWithRelationInput)
    orderBy?: Array<BudgetTransactionOrderByWithRelationInput>;

    @Field(() => BudgetTransactionWhereUniqueInput, {nullable:true})
    @Type(() => BudgetTransactionWhereUniqueInput)
    cursor?: Prisma.AtLeast<BudgetTransactionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BudgetTransactionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BudgetTransactionScalarFieldEnum}`>;
}
