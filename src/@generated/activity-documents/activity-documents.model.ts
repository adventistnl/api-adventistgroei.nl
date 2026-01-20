import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProjectActivity } from '../project-activity/project-activity.model';

@ObjectType()
export class ActivityDocuments {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    activity_id!: string;

    @Field(() => String, {nullable:false})
    file_url!: string;

    @Field(() => String, {nullable:true})
    drive_file_id!: string | null;

    @Field(() => String, {nullable:false})
    filename!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_validated!: boolean;

    @Field(() => String, {nullable:false})
    uploaded_by!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    validated_at!: Date | null;

    @Field(() => String, {nullable:true})
    project_activity_id!: string | null;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => ProjectActivity, {nullable:true})
    project_activity?: ProjectActivity | null;
}
