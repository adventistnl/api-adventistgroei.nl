import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { SubsidyRequestPriority } from '../prisma/subsidy-request-priority.enum';
import { Institution } from '../institution/institution.model';
import { User } from '../user/user.model';
import { Department } from '../department/department.model';
import { Church } from '../church/church.model';
import { SubsidyStatus } from '../subsidy-status/subsidy-status.model';
import { SubsidyRequestItem } from '../subsidy-request-item/subsidy-request-item.model';
import { Project } from '../project/project.model';
import { SubsidyReceipt } from '../subsidy-receipt/subsidy-receipt.model';
import { SubsidyStatusHistory } from '../subsidy-status-history/subsidy-status-history.model';
import { SubsidyRequestCount } from './subsidy-request-count.output';

@ObjectType()
export class SubsidyRequest {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    total_budget!: Decimal;

    @Field(() => GraphQLDecimal, {defaultValue:0,nullable:false})
    approved_amount!: Decimal;

    @Field(() => String, {nullable:true})
    rejection_reason!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Date, {nullable:true})
    approved_at!: Date | null;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => String, {nullable:true})
    approved_by!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    requester_id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:true})
    church_id!: string | null;

    @Field(() => SubsidyRequestPriority, {defaultValue:'MEDIUM',nullable:false})
    priority!: `${SubsidyRequestPriority}`;

    @Field(() => String, {nullable:false})
    subsidy_statuses_id!: string;

    @Field(() => String, {nullable:false})
    project_id!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_for_advance!: boolean;

    @Field(() => GraphQLDecimal, {nullable:true})
    advance_amount!: Decimal | null;

    @Field(() => GraphQLDecimal, {defaultValue:0,nullable:false})
    refund_amount!: Decimal;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    have_refund!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    refund_done!: boolean;

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => User, {nullable:false})
    requester?: User;

    @Field(() => Department, {nullable:false})
    department?: Department;

    @Field(() => Church, {nullable:true})
    church?: Church | null;

    @Field(() => SubsidyStatus, {nullable:false})
    subsidy_status?: SubsidyStatus;

    @Field(() => [SubsidyRequestItem], {nullable:true})
    items?: Array<SubsidyRequestItem>;

    @Field(() => Project, {nullable:false})
    project?: Project;

    @Field(() => [SubsidyReceipt], {nullable:true})
    subsidy_receipts?: Array<SubsidyReceipt>;

    @Field(() => [SubsidyStatusHistory], {nullable:true})
    status_history?: Array<SubsidyStatusHistory>;

    @Field(() => SubsidyRequestCount, {nullable:false})
    _count?: SubsidyRequestCount;
}
