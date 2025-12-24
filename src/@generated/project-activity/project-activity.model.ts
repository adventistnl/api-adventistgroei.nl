import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { ActivityTags } from '../prisma/activity-tags.enum';
import { ActivityStatus } from '../prisma/activity-status.enum';
import { ActivityPriority } from '../prisma/activity-priority.enum';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';
import { Project } from '../project/project.model';
import { SubsidyReceipt } from '../subsidy-receipt/subsidy-receipt.model';
import { ActivityDocuments } from '../activity-documents/activity-documents.model';
import { ActivityFunding } from '../activity-funding/activity-funding.model';
import { ProjectActivityLog } from '../project-activity-log/project-activity-log.model';
import { ProjectActivityAssignee } from '../project-activity-assignee/project-activity-assignee.model';
import { ProjectActivityCount } from './project-activity-count.output';

@ObjectType()
export class ProjectActivity {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    project_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    budget_amount!: Decimal;

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

    @Field(() => Date, {nullable:false})
    deadline!: Date;

    @Field(() => [ActivityTags], {nullable:true})
    tags!: Array<`${ActivityTags}`>;

    @Field(() => [String], {nullable:true})
    custom_tags!: Array<string>;

    @Field(() => ActivityTags, {nullable:true})
    activity_tag!: `${ActivityTags}` | null;

    @Field(() => ActivityStatus, {defaultValue:'TODO',nullable:false})
    status!: `${ActivityStatus}`;

    @Field(() => ActivityPriority, {defaultValue:'MEDIUM',nullable:false})
    priority!: `${ActivityPriority}`;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_subsidized!: boolean;

    @Field(() => [SubsidyRequest], {nullable:true})
    subsidy_request?: Array<SubsidyRequest>;

    @Field(() => Project, {nullable:false})
    project?: Project;

    @Field(() => [SubsidyReceipt], {nullable:true})
    subsidy_receipts?: Array<SubsidyReceipt>;

    @Field(() => [ActivityDocuments], {nullable:true})
    activity_documents?: Array<ActivityDocuments>;

    @Field(() => ActivityFunding, {nullable:true})
    activity_funding?: ActivityFunding | null;

    @Field(() => [ProjectActivityLog], {nullable:true})
    logs?: Array<ProjectActivityLog>;

    @Field(() => [ProjectActivityAssignee], {nullable:true})
    assignees?: Array<ProjectActivityAssignee>;

    @Field(() => ProjectActivityCount, {nullable:false})
    _count?: ProjectActivityCount;
}
