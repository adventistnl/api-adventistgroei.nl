import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundType } from './refund-type.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumRefundTypeNullableFilter } from './nested-enum-refund-type-nullable-filter.input';

@InputType()
export class NestedEnumRefundTypeNullableWithAggregatesFilter {

    @Field(() => RefundType, {nullable:true})
    equals?: `${RefundType}`;

    @Field(() => [RefundType], {nullable:true})
    in?: Array<`${RefundType}`>;

    @Field(() => [RefundType], {nullable:true})
    notIn?: Array<`${RefundType}`>;

    @Field(() => NestedEnumRefundTypeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRefundTypeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumRefundTypeNullableFilter, {nullable:true})
    _min?: NestedEnumRefundTypeNullableFilter;

    @Field(() => NestedEnumRefundTypeNullableFilter, {nullable:true})
    _max?: NestedEnumRefundTypeNullableFilter;
}
