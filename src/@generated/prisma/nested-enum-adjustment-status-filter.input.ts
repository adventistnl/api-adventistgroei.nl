import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdjustmentStatus } from './adjustment-status.enum';

@InputType()
export class NestedEnumAdjustmentStatusFilter {

    @Field(() => AdjustmentStatus, {nullable:true})
    equals?: `${AdjustmentStatus}`;

    @Field(() => [AdjustmentStatus], {nullable:true})
    in?: Array<`${AdjustmentStatus}`>;

    @Field(() => [AdjustmentStatus], {nullable:true})
    notIn?: Array<`${AdjustmentStatus}`>;

    @Field(() => NestedEnumAdjustmentStatusFilter, {nullable:true})
    not?: NestedEnumAdjustmentStatusFilter;
}
