import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingWhereInput } from './setting-where.input';
import { Type } from 'class-transformer';
import { SettingOrderByWithAggregationInput } from './setting-order-by-with-aggregation.input';
import { SettingScalarFieldEnum } from './setting-scalar-field.enum';
import { SettingScalarWhereWithAggregatesInput } from './setting-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SettingCountAggregateInput } from './setting-count-aggregate.input';
import { SettingMinAggregateInput } from './setting-min-aggregate.input';
import { SettingMaxAggregateInput } from './setting-max-aggregate.input';

@ArgsType()
export class SettingGroupByArgs {

    @Field(() => SettingWhereInput, {nullable:true})
    @Type(() => SettingWhereInput)
    where?: SettingWhereInput;

    @Field(() => [SettingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SettingOrderByWithAggregationInput>;

    @Field(() => [SettingScalarFieldEnum], {nullable:false})
    by!: Array<`${SettingScalarFieldEnum}`>;

    @Field(() => SettingScalarWhereWithAggregatesInput, {nullable:true})
    having?: SettingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SettingCountAggregateInput, {nullable:true})
    _count?: SettingCountAggregateInput;

    @Field(() => SettingMinAggregateInput, {nullable:true})
    _min?: SettingMinAggregateInput;

    @Field(() => SettingMaxAggregateInput, {nullable:true})
    _max?: SettingMaxAggregateInput;
}
