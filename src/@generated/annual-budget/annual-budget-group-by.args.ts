import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';
import { AnnualBudgetOrderByWithAggregationInput } from './annual-budget-order-by-with-aggregation.input';
import { AnnualBudgetScalarFieldEnum } from './annual-budget-scalar-field.enum';
import { AnnualBudgetScalarWhereWithAggregatesInput } from './annual-budget-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AnnualBudgetCountAggregateInput } from './annual-budget-count-aggregate.input';
import { AnnualBudgetAvgAggregateInput } from './annual-budget-avg-aggregate.input';
import { AnnualBudgetSumAggregateInput } from './annual-budget-sum-aggregate.input';
import { AnnualBudgetMinAggregateInput } from './annual-budget-min-aggregate.input';
import { AnnualBudgetMaxAggregateInput } from './annual-budget-max-aggregate.input';

@ArgsType()
export class AnnualBudgetGroupByArgs {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;

    @Field(() => [AnnualBudgetOrderByWithAggregationInput], {nullable:true})
    @Type(() => AnnualBudgetOrderByWithAggregationInput)
    orderBy?: Array<AnnualBudgetOrderByWithAggregationInput>;

    @Field(() => [AnnualBudgetScalarFieldEnum], {nullable:false})
    by!: Array<`${AnnualBudgetScalarFieldEnum}`>;

    @Field(() => AnnualBudgetScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => AnnualBudgetScalarWhereWithAggregatesInput)
    having?: AnnualBudgetScalarWhereWithAggregatesInput;

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
