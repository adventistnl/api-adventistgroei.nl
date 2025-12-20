import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProjectActivityCreatetagsInput } from './project-activity-createtags.input';
import { ProjectActivityCreatecustom_tagsInput } from './project-activity-createcustom-tags.input';
import { ActivityTags } from '../prisma/activity-tags.enum';
import { ActivityStatus } from '../prisma/activity-status.enum';
import { ActivityPriority } from '../prisma/activity-priority.enum';

@InputType()
export class ProjectActivityCreateManyInput {

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

    @Field(() => String, {nullable:false})
    owner_id!: string;

    @Field(() => ProjectActivityCreatetagsInput, {nullable:true})
    @Type(() => ProjectActivityCreatetagsInput)
    tags?: ProjectActivityCreatetagsInput;

    @Field(() => ProjectActivityCreatecustom_tagsInput, {nullable:true})
    @Type(() => ProjectActivityCreatecustom_tagsInput)
    custom_tags?: ProjectActivityCreatecustom_tagsInput;

    @Field(() => ActivityTags, {nullable:true})
    activity_tag?: `${ActivityTags}`;

    @Field(() => ActivityStatus, {nullable:true})
    status?: `${ActivityStatus}`;

    @Field(() => ActivityPriority, {nullable:true})
    priority?: `${ActivityPriority}`;

    @Field(() => Boolean, {nullable:true})
    is_subsidized?: boolean;
}
