import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyReceiptCreateManySubsidy_requestInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    project_activities_id?: string;

    @Field(() => Boolean, {nullable:true})
    is_refund_receipt?: boolean;

    @Field(() => String, {nullable:false})
    file_url!: string;

    @Field(() => String, {nullable:true})
    drive_file_id?: string;

    @Field(() => String, {nullable:false})
    filename!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    amount?: Decimal;

    @Field(() => Boolean, {nullable:true})
    approved?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_validated?: boolean;

    @Field(() => Date, {nullable:true})
    validated_at?: Date | string;

    @Field(() => String, {nullable:true})
    validated_by?: string;

    @Field(() => String, {nullable:true})
    rejection_reason?: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => String, {nullable:false})
    uploaded_by!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => String, {nullable:true})
    subsidy_request_item_id?: string;
}
