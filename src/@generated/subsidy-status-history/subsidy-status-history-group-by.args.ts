import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusHistoryWhereInput } from './subsidy-status-history-where.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryOrderByWithAggregationInput } from './subsidy-status-history-order-by-with-aggregation.input';
import { SubsidyStatusHistoryScalarFieldEnum } from './subsidy-status-history-scalar-field.enum';
import { SubsidyStatusHistoryScalarWhereWithAggregatesInput } from './subsidy-status-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubsidyStatusHistoryCountAggregateInput } from './subsidy-status-history-count-aggregate.input';
import { SubsidyStatusHistoryMinAggregateInput } from './subsidy-status-history-min-aggregate.input';
import { SubsidyStatusHistoryMaxAggregateInput } from './subsidy-status-history-max-aggregate.input';

@ArgsType()
export class SubsidyStatusHistoryGroupByArgs {

    @Field(() => SubsidyStatusHistoryWhereInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereInput)
    where?: SubsidyStatusHistoryWhereInput;

    @Field(() => [SubsidyStatusHistoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubsidyStatusHistoryOrderByWithAggregationInput>;

    @Field(() => [SubsidyStatusHistoryScalarFieldEnum], {nullable:false})
    by!: Array<`${SubsidyStatusHistoryScalarFieldEnum}`>;

    @Field(() => SubsidyStatusHistoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubsidyStatusHistoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubsidyStatusHistoryCountAggregateInput, {nullable:true})
    _count?: SubsidyStatusHistoryCountAggregateInput;

    @Field(() => SubsidyStatusHistoryMinAggregateInput, {nullable:true})
    _min?: SubsidyStatusHistoryMinAggregateInput;

    @Field(() => SubsidyStatusHistoryMaxAggregateInput, {nullable:true})
    _max?: SubsidyStatusHistoryMaxAggregateInput;
}
