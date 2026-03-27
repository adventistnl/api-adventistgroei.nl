import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubsidyReceiptMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    project_activities_id?: true;

    @Field(() => Boolean, {nullable:true})
    is_refund_receipt?: true;

    @Field(() => Boolean, {nullable:true})
    file_url?: true;

    @Field(() => Boolean, {nullable:true})
    drive_file_id?: true;

    @Field(() => Boolean, {nullable:true})
    filename?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    approved?: true;

    @Field(() => Boolean, {nullable:true})
    is_validated?: true;

    @Field(() => Boolean, {nullable:true})
    validated_at?: true;

    @Field(() => Boolean, {nullable:true})
    validated_by?: true;

    @Field(() => Boolean, {nullable:true})
    rejection_reason?: true;

    @Field(() => Boolean, {nullable:true})
    note?: true;

    @Field(() => Boolean, {nullable:true})
    uploaded_by?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    created_by?: true;

    @Field(() => Boolean, {nullable:true})
    updated_by?: true;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_at?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_by?: true;

    @Field(() => Boolean, {nullable:true})
    subsidy_request_id?: true;

    @Field(() => Boolean, {nullable:true})
    subsidy_request_item_id?: true;
}
