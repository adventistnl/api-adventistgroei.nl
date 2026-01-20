import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { SubsidyReceiptUncheckedCreateNestedManyWithoutSubsidy_request_itemInput } from '../subsidy-receipt/subsidy-receipt-unchecked-create-nested-many-without-subsidy-request-item.input';

@InputType()
export class SubsidyRequestItemUncheckedCreateWithoutProject_activityInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    subsidy_request_id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    requested_amount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    approved_amount?: Decimal;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => SubsidyReceiptUncheckedCreateNestedManyWithoutSubsidy_request_itemInput, {nullable:true})
    @Type(() => SubsidyReceiptUncheckedCreateNestedManyWithoutSubsidy_request_itemInput)
    subsidy_receipts?: SubsidyReceiptUncheckedCreateNestedManyWithoutSubsidy_request_itemInput;
}
