import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProjectActivityCreatetagsInput } from './project-activity-createtags.input';
import { ProjectActivityCreatecustom_tagsInput } from './project-activity-createcustom-tags.input';
import { ActivityStatus } from '../prisma/activity-status.enum';
import { ActivityPriority } from '../prisma/activity-priority.enum';
import { SubsidyRequestItemCreateNestedManyWithoutProject_activityInput } from '../subsidy-request-item/subsidy-request-item-create-nested-many-without-project-activity.input';
import { ProjectCreateNestedOneWithoutActivitiesInput } from '../project/project-create-nested-one-without-activities.input';
import { SubsidyReceiptCreateNestedManyWithoutProject_activityInput } from '../subsidy-receipt/subsidy-receipt-create-nested-many-without-project-activity.input';
import { ActivityDocumentsCreateNestedManyWithoutProject_activityInput } from '../activity-documents/activity-documents-create-nested-many-without-project-activity.input';
import { ActivityFundingCreateNestedOneWithoutActivityInput } from '../activity-funding/activity-funding-create-nested-one-without-activity.input';
import { ProjectActivityAssigneeCreateNestedManyWithoutActivityInput } from '../project-activity-assignee/project-activity-assignee-create-nested-many-without-activity.input';

@InputType()
export class ProjectActivityCreateWithoutLogsInput {

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

    @Field(() => ProjectActivityCreatecustom_tagsInput, {nullable:true})
    @Type(() => ProjectActivityCreatecustom_tagsInput)
    custom_tags?: ProjectActivityCreatecustom_tagsInput;

    @Field(() => ActivityStatus, {nullable:true})
    status?: `${ActivityStatus}`;

    @Field(() => ActivityPriority, {nullable:true})
    priority?: `${ActivityPriority}`;

    @Field(() => Boolean, {nullable:true})
    is_subsidized?: boolean;

    @Field(() => SubsidyRequestItemCreateNestedManyWithoutProject_activityInput, {nullable:true})
    @Type(() => SubsidyRequestItemCreateNestedManyWithoutProject_activityInput)
    subsidy_request_items?: SubsidyRequestItemCreateNestedManyWithoutProject_activityInput;

    @Field(() => ProjectCreateNestedOneWithoutActivitiesInput, {nullable:false})
    @Type(() => ProjectCreateNestedOneWithoutActivitiesInput)
    project!: ProjectCreateNestedOneWithoutActivitiesInput;

    @Field(() => SubsidyReceiptCreateNestedManyWithoutProject_activityInput, {nullable:true})
    @Type(() => SubsidyReceiptCreateNestedManyWithoutProject_activityInput)
    subsidy_receipts?: SubsidyReceiptCreateNestedManyWithoutProject_activityInput;

    @Field(() => ActivityDocumentsCreateNestedManyWithoutProject_activityInput, {nullable:true})
    @Type(() => ActivityDocumentsCreateNestedManyWithoutProject_activityInput)
    activity_documents?: ActivityDocumentsCreateNestedManyWithoutProject_activityInput;

    @Field(() => ActivityFundingCreateNestedOneWithoutActivityInput, {nullable:true})
    @Type(() => ActivityFundingCreateNestedOneWithoutActivityInput)
    activity_funding?: ActivityFundingCreateNestedOneWithoutActivityInput;

    @Field(() => ProjectActivityAssigneeCreateNestedManyWithoutActivityInput, {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateNestedManyWithoutActivityInput)
    assignees?: ProjectActivityAssigneeCreateNestedManyWithoutActivityInput;
}
