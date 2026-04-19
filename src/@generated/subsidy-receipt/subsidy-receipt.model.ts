import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { ProjectActivity } from '../project-activity/project-activity.model';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';
import { SubsidyRequestItem } from '../subsidy-request-item/subsidy-request-item.model';

@ObjectType()
export class SubsidyReceipt {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    project_activities_id!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_refund_receipt!: boolean;

    @Field(() => String, {nullable:false})
    file_url!: string;

    @Field(() => String, {nullable:true})
    drive_file_id!: string | null;

    @Field(() => String, {nullable:false})
    filename!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount!: Decimal | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    approved!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_validated!: boolean;

    @Field(() => Date, {nullable:true})
    validated_at!: Date | null;

    @Field(() => String, {nullable:true})
    validated_by!: string | null;

    @Field(() => String, {nullable:true})
    rejection_reason!: string | null;

    @Field(() => String, {nullable:true})
    note!: string | null;

    @Field(() => String, {nullable:false})
    uploaded_by!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => String, {nullable:true})
    subsidy_request_id!: string | null;

    @Field(() => String, {nullable:true})
    subsidy_request_item_id!: string | null;

    @Field(() => ProjectActivity, {nullable:true})
    project_activity?: ProjectActivity | null;

    @Field(() => SubsidyRequest, {nullable:true})
    subsidy_request?: SubsidyRequest | null;

    @Field(() => SubsidyRequestItem, {nullable:true})
    subsidy_request_item?: SubsidyRequestItem | null;
}
