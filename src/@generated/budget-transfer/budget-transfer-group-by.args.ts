import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BudgetTransferWhereInput } from './budget-transfer-where.input';
import { Type } from 'class-transformer';
import { BudgetTransferOrderByWithAggregationInput } from './budget-transfer-order-by-with-aggregation.input';
import { BudgetTransferScalarFieldEnum } from './budget-transfer-scalar-field.enum';
import { BudgetTransferScalarWhereWithAggregatesInput } from './budget-transfer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BudgetTransferCountAggregateInput } from './budget-transfer-count-aggregate.input';
import { BudgetTransferAvgAggregateInput } from './budget-transfer-avg-aggregate.input';
import { BudgetTransferSumAggregateInput } from './budget-transfer-sum-aggregate.input';
import { BudgetTransferMinAggregateInput } from './budget-transfer-min-aggregate.input';
import { BudgetTransferMaxAggregateInput } from './budget-transfer-max-aggregate.input';

@ArgsType()
export class BudgetTransferGroupByArgs {

    @Field(() => BudgetTransferWhereInput, {nullable:true})
    @Type(() => BudgetTransferWhereInput)
    where?: BudgetTransferWhereInput;

    @Field(() => [BudgetTransferOrderByWithAggregationInput], {nullable:true})
    @Type(() => BudgetTransferOrderByWithAggregationInput)
    orderBy?: Array<BudgetTransferOrderByWithAggregationInput>;

    @Field(() => [BudgetTransferScalarFieldEnum], {nullable:false})
    by!: Array<`${BudgetTransferScalarFieldEnum}`>;

    @Field(() => BudgetTransferScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => BudgetTransferScalarWhereWithAggregatesInput)
    having?: BudgetTransferScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BudgetTransferCountAggregateInput, {nullable:true})
    @Type(() => BudgetTransferCountAggregateInput)
    _count?: BudgetTransferCountAggregateInput;

    @Field(() => BudgetTransferAvgAggregateInput, {nullable:true})
    @Type(() => BudgetTransferAvgAggregateInput)
    _avg?: BudgetTransferAvgAggregateInput;

    @Field(() => BudgetTransferSumAggregateInput, {nullable:true})
    @Type(() => BudgetTransferSumAggregateInput)
    _sum?: BudgetTransferSumAggregateInput;

    @Field(() => BudgetTransferMinAggregateInput, {nullable:true})
    @Type(() => BudgetTransferMinAggregateInput)
    _min?: BudgetTransferMinAggregateInput;

    @Field(() => BudgetTransferMaxAggregateInput, {nullable:true})
    @Type(() => BudgetTransferMaxAggregateInput)
    _max?: BudgetTransferMaxAggregateInput;
}
