import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdjustmentStatus } from './adjustment-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAdjustmentStatusFilter } from './nested-enum-adjustment-status-filter.input';

@InputType()
export class NestedEnumAdjustmentStatusWithAggregatesFilter {

    @Field(() => AdjustmentStatus, {nullable:true})
    equals?: `${AdjustmentStatus}`;

    @Field(() => [AdjustmentStatus], {nullable:true})
    in?: Array<`${AdjustmentStatus}`>;

    @Field(() => [AdjustmentStatus], {nullable:true})
    notIn?: Array<`${AdjustmentStatus}`>;

    @Field(() => NestedEnumAdjustmentStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAdjustmentStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAdjustmentStatusFilter, {nullable:true})
    _min?: NestedEnumAdjustmentStatusFilter;

    @Field(() => NestedEnumAdjustmentStatusFilter, {nullable:true})
    _max?: NestedEnumAdjustmentStatusFilter;
}
