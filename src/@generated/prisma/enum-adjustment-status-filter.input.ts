import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdjustmentStatus } from './adjustment-status.enum';
import { NestedEnumAdjustmentStatusFilter } from './nested-enum-adjustment-status-filter.input';

@InputType()
export class EnumAdjustmentStatusFilter {

    @Field(() => AdjustmentStatus, {nullable:true})
    equals?: `${AdjustmentStatus}`;

    @Field(() => [AdjustmentStatus], {nullable:true})
    in?: Array<`${AdjustmentStatus}`>;

    @Field(() => [AdjustmentStatus], {nullable:true})
    notIn?: Array<`${AdjustmentStatus}`>;

    @Field(() => NestedEnumAdjustmentStatusFilter, {nullable:true})
    not?: NestedEnumAdjustmentStatusFilter;
}
