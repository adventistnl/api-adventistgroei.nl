import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundType } from './refund-type.enum';

@InputType()
export class NullableEnumRefundTypeFieldUpdateOperationsInput {

    @Field(() => RefundType, {nullable:true})
    set?: `${RefundType}`;
}
