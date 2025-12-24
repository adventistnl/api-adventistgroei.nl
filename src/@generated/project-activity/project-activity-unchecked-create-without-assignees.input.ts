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
import { SubsidyRequestUncheckedCreateNestedManyWithoutProject_activitiesInput } from '../subsidy-request/subsidy-request-unchecked-create-nested-many-without-project-activities.input';
import { SubsidyReceiptUncheckedCreateNestedManyWithoutProject_activityInput } from '../subsidy-receipt/subsidy-receipt-unchecked-create-nested-many-without-project-activity.input';
import { ActivityDocumentsUncheckedCreateNestedManyWithoutProject_activityInput } from '../activity-documents/activity-documents-unchecked-create-nested-many-without-project-activity.input';
import { ActivityFundingUncheckedCreateNestedOneWithoutActivityInput } from '../activity-funding/activity-funding-unchecked-create-nested-one-without-activity.input';
import { ProjectActivityLogUncheckedCreateNestedManyWithoutActivityInput } from '../project-activity-log/project-activity-log-unchecked-create-nested-many-without-activity.input';

@InputType()
export class ProjectActivityUncheckedCreateWithoutAssigneesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    project_id!: string;

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

    @Field(() => SubsidyRequestUncheckedCreateNestedManyWithoutProject_activitiesInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedCreateNestedManyWithoutProject_activitiesInput)
    subsidy_request?: SubsidyRequestUncheckedCreateNestedManyWithoutProject_activitiesInput;

    @Field(() => SubsidyReceiptUncheckedCreateNestedManyWithoutProject_activityInput, {nullable:true})
    @Type(() => SubsidyReceiptUncheckedCreateNestedManyWithoutProject_activityInput)
    subsidy_receipts?: SubsidyReceiptUncheckedCreateNestedManyWithoutProject_activityInput;

    @Field(() => ActivityDocumentsUncheckedCreateNestedManyWithoutProject_activityInput, {nullable:true})
    @Type(() => ActivityDocumentsUncheckedCreateNestedManyWithoutProject_activityInput)
    activity_documents?: ActivityDocumentsUncheckedCreateNestedManyWithoutProject_activityInput;

    @Field(() => ActivityFundingUncheckedCreateNestedOneWithoutActivityInput, {nullable:true})
    @Type(() => ActivityFundingUncheckedCreateNestedOneWithoutActivityInput)
    activity_funding?: ActivityFundingUncheckedCreateNestedOneWithoutActivityInput;

    @Field(() => ProjectActivityLogUncheckedCreateNestedManyWithoutActivityInput, {nullable:true})
    @Type(() => ProjectActivityLogUncheckedCreateNestedManyWithoutActivityInput)
    logs?: ProjectActivityLogUncheckedCreateNestedManyWithoutActivityInput;
}
