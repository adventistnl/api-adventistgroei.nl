import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProjectActivityCreatetagsInput } from './project-activity-createtags.input';
import { SubsidyRequestCreateNestedManyWithoutProject_activitiesInput } from '../subsidy-request/subsidy-request-create-nested-many-without-project-activities.input';
import { ProjectCreateNestedOneWithoutActivitiesInput } from '../project/project-create-nested-one-without-activities.input';
import { SubsidyReceiptCreateNestedManyWithoutProject_activityInput } from '../subsidy-receipt/subsidy-receipt-create-nested-many-without-project-activity.input';
import { ActivityDocumentsCreateNestedManyWithoutProject_activityInput } from '../activity-documents/activity-documents-create-nested-many-without-project-activity.input';
import { ActivityFundingCreateNestedOneWithoutProject_activityInput } from '../activity-funding/activity-funding-create-nested-one-without-project-activity.input';
import { UserCreateNestedOneWithoutProject_activitiesInput } from '../user/user-create-nested-one-without-project-activities.input';

@InputType()
export class ProjectActivityCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    budget_amount!: Decimal;

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

    @Field(() => Date, {nullable:false})
    deadline!: Date | string;

    @Field(() => ProjectActivityCreatetagsInput, {nullable:true})
    @Type(() => ProjectActivityCreatetagsInput)
    tags?: ProjectActivityCreatetagsInput;

    @Field(() => SubsidyRequestCreateNestedManyWithoutProject_activitiesInput, {nullable:true})
    @Type(() => SubsidyRequestCreateNestedManyWithoutProject_activitiesInput)
    subsidy_request?: SubsidyRequestCreateNestedManyWithoutProject_activitiesInput;

    @Field(() => ProjectCreateNestedOneWithoutActivitiesInput, {nullable:false})
    @Type(() => ProjectCreateNestedOneWithoutActivitiesInput)
    project!: ProjectCreateNestedOneWithoutActivitiesInput;

    @Field(() => SubsidyReceiptCreateNestedManyWithoutProject_activityInput, {nullable:true})
    @Type(() => SubsidyReceiptCreateNestedManyWithoutProject_activityInput)
    subsidy_receipts?: SubsidyReceiptCreateNestedManyWithoutProject_activityInput;

    @Field(() => ActivityDocumentsCreateNestedManyWithoutProject_activityInput, {nullable:true})
    @Type(() => ActivityDocumentsCreateNestedManyWithoutProject_activityInput)
    activity_documents?: ActivityDocumentsCreateNestedManyWithoutProject_activityInput;

    @Field(() => ActivityFundingCreateNestedOneWithoutProject_activityInput, {nullable:true})
    @Type(() => ActivityFundingCreateNestedOneWithoutProject_activityInput)
    activity_funding?: ActivityFundingCreateNestedOneWithoutProject_activityInput;

    @Field(() => UserCreateNestedOneWithoutProject_activitiesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutProject_activitiesInput)
    owner!: UserCreateNestedOneWithoutProject_activitiesInput;
}
