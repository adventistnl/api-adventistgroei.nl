import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { ProjectActivity } from '../project-activity/project-activity.model';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';

@ObjectType()
export class SubsidyReceipt {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    project_activities_id!: string;

    @Field(() => String, {nullable:false})
    file_path!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => Boolean, {nullable:false})
    approved!: boolean;

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

    @Field(() => ProjectActivity, {nullable:false})
    project_activity?: ProjectActivity;

    @Field(() => SubsidyRequest, {nullable:true})
    subsidy_request?: SubsidyRequest | null;
}
