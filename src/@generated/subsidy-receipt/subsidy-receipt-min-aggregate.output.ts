import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class SubsidyReceiptMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    project_activities_id?: string;

    @Field(() => String, {nullable:true})
    file_url?: string;

    @Field(() => String, {nullable:true})
    drive_file_id?: string;

    @Field(() => String, {nullable:true})
    filename?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
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
    uploaded_by?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => String, {nullable:true})
    subsidy_request_id?: string;

    @Field(() => String, {nullable:true})
    subsidy_request_item_id?: string;
}
