import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedTokensWhereInput } from './used-tokens-where.input';
import { Type } from 'class-transformer';
import { UsedTokensOrderByWithAggregationInput } from './used-tokens-order-by-with-aggregation.input';
import { UsedTokensScalarFieldEnum } from './used-tokens-scalar-field.enum';
import { UsedTokensScalarWhereWithAggregatesInput } from './used-tokens-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UsedTokensCountAggregateInput } from './used-tokens-count-aggregate.input';
import { UsedTokensMinAggregateInput } from './used-tokens-min-aggregate.input';
import { UsedTokensMaxAggregateInput } from './used-tokens-max-aggregate.input';

@ArgsType()
export class UsedTokensGroupByArgs {

    @Field(() => UsedTokensWhereInput, {nullable:true})
    @Type(() => UsedTokensWhereInput)
    where?: UsedTokensWhereInput;

    @Field(() => [UsedTokensOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UsedTokensOrderByWithAggregationInput>;

    @Field(() => [UsedTokensScalarFieldEnum], {nullable:false})
    by!: Array<`${UsedTokensScalarFieldEnum}`>;

    @Field(() => UsedTokensScalarWhereWithAggregatesInput, {nullable:true})
    having?: UsedTokensScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UsedTokensCountAggregateInput, {nullable:true})
    _count?: UsedTokensCountAggregateInput;

    @Field(() => UsedTokensMinAggregateInput, {nullable:true})
    _min?: UsedTokensMinAggregateInput;

    @Field(() => UsedTokensMaxAggregateInput, {nullable:true})
    _max?: UsedTokensMaxAggregateInput;
}
