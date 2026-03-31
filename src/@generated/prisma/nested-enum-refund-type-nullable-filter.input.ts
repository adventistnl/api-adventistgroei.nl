import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundType } from './refund-type.enum';

@InputType()
export class NestedEnumRefundTypeNullableFilter {

    @Field(() => RefundType, {nullable:true})
    equals?: `${RefundType}`;

    @Field(() => [RefundType], {nullable:true})
    in?: Array<`${RefundType}`>;

    @Field(() => [RefundType], {nullable:true})
    notIn?: Array<`${RefundType}`>;

    @Field(() => NestedEnumRefundTypeNullableFilter, {nullable:true})
    not?: NestedEnumRefundTypeNullableFilter;
}
