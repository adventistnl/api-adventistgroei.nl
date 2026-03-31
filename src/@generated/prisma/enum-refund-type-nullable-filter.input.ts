import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundType } from './refund-type.enum';
import { NestedEnumRefundTypeNullableFilter } from './nested-enum-refund-type-nullable-filter.input';

@InputType()
export class EnumRefundTypeNullableFilter {

    @Field(() => RefundType, {nullable:true})
    equals?: `${RefundType}`;

    @Field(() => [RefundType], {nullable:true})
    in?: Array<`${RefundType}`>;

    @Field(() => [RefundType], {nullable:true})
    notIn?: Array<`${RefundType}`>;

    @Field(() => NestedEnumRefundTypeNullableFilter, {nullable:true})
    not?: NestedEnumRefundTypeNullableFilter;
}
