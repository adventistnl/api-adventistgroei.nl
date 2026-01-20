import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SubsidyHistoryType } from '../prisma/subsidy-history-type.enum';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';
import { SubsidyStatus } from '../subsidy-status/subsidy-status.model';
import { User } from '../user/user.model';

@ObjectType()
export class SubsidyStatusHistory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    subsidy_request_id!: string;

    @Field(() => String, {nullable:false})
    status_id!: string;

    @Field(() => String, {nullable:true})
    previous_status_id!: string | null;

    @Field(() => SubsidyHistoryType, {defaultValue:'STATUS_CHANGE',nullable:false})
    type!: `${SubsidyHistoryType}`;

    @Field(() => String, {nullable:true})
    reason!: string | null;

    @Field(() => String, {nullable:false})
    changed_by!: string;

    @Field(() => Date, {nullable:false})
    changed_at!: Date;

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

    @Field(() => SubsidyStatus, {nullable:false})
    status?: SubsidyStatus;

    @Field(() => SubsidyStatus, {nullable:true})
    previous_status?: SubsidyStatus | null;

    @Field(() => User, {nullable:false})
    user?: User;
}
