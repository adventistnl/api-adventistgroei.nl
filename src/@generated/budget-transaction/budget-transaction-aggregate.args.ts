import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransactionWhereInput } from './budget-transaction-where.input';
import { Type } from 'class-transformer';
import { BudgetTransactionOrderByWithRelationInput } from './budget-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BudgetTransactionWhereUniqueInput } from './budget-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BudgetTransactionCountAggregateInput } from './budget-transaction-count-aggregate.input';
import { BudgetTransactionAvgAggregateInput } from './budget-transaction-avg-aggregate.input';
import { BudgetTransactionSumAggregateInput } from './budget-transaction-sum-aggregate.input';
import { BudgetTransactionMinAggregateInput } from './budget-transaction-min-aggregate.input';
import { BudgetTransactionMaxAggregateInput } from './budget-transaction-max-aggregate.input';

@ArgsType()
export class BudgetTransactionAggregateArgs {

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

    @Field(() => BudgetTransactionCountAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionCountAggregateInput)
    _count?: BudgetTransactionCountAggregateInput;

    @Field(() => BudgetTransactionAvgAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionAvgAggregateInput)
    _avg?: BudgetTransactionAvgAggregateInput;

    @Field(() => BudgetTransactionSumAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionSumAggregateInput)
    _sum?: BudgetTransactionSumAggregateInput;

    @Field(() => BudgetTransactionMinAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionMinAggregateInput)
    _min?: BudgetTransactionMinAggregateInput;

    @Field(() => BudgetTransactionMaxAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionMaxAggregateInput)
    _max?: BudgetTransactionMaxAggregateInput;
}
