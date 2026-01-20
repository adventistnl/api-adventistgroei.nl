import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';
import { ProjectActivity } from '../project-activity/project-activity.model';
import { SubsidyReceipt } from '../subsidy-receipt/subsidy-receipt.model';
import { SubsidyRequestItemCount } from './subsidy-request-item-count.output';

@ObjectType()
export class SubsidyRequestItem {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    subsidy_request_id!: string;

    @Field(() => String, {nullable:false})
    project_activity_id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    requested_amount!: Decimal;

    @Field(() => GraphQLDecimal, {defaultValue:0,nullable:false})
    approved_amount!: Decimal;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => SubsidyRequest, {nullable:false})
    subsidy_request?: SubsidyRequest;

    @Field(() => ProjectActivity, {nullable:false})
    project_activity?: ProjectActivity;

    @Field(() => [SubsidyReceipt], {nullable:true})
    subsidy_receipts?: Array<SubsidyReceipt>;

    @Field(() => SubsidyRequestItemCount, {nullable:false})
    _count?: SubsidyRequestItemCount;
}
