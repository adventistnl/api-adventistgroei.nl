import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';
import { AnnualBudgetOrderByWithRelationInput } from './annual-budget-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnnualBudgetCountAggregateInput } from './annual-budget-count-aggregate.input';
import { AnnualBudgetAvgAggregateInput } from './annual-budget-avg-aggregate.input';
import { AnnualBudgetSumAggregateInput } from './annual-budget-sum-aggregate.input';
import { AnnualBudgetMinAggregateInput } from './annual-budget-min-aggregate.input';
import { AnnualBudgetMaxAggregateInput } from './annual-budget-max-aggregate.input';

@ArgsType()
export class AnnualBudgetAggregateArgs {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;

    @Field(() => [AnnualBudgetOrderByWithRelationInput], {nullable:true})
    @Type(() => AnnualBudgetOrderByWithRelationInput)
    orderBy?: Array<AnnualBudgetOrderByWithRelationInput>;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    cursor?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AnnualBudgetCountAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetCountAggregateInput)
    _count?: AnnualBudgetCountAggregateInput;

    @Field(() => AnnualBudgetAvgAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetAvgAggregateInput)
    _avg?: AnnualBudgetAvgAggregateInput;

    @Field(() => AnnualBudgetSumAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetSumAggregateInput)
    _sum?: AnnualBudgetSumAggregateInput;

    @Field(() => AnnualBudgetMinAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetMinAggregateInput)
    _min?: AnnualBudgetMinAggregateInput;

    @Field(() => AnnualBudgetMaxAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetMaxAggregateInput)
    _max?: AnnualBudgetMaxAggregateInput;
}
