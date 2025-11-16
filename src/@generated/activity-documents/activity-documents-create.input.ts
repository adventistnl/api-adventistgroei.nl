import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateNestedOneWithoutActivity_documentsInput } from '../project-activity/project-activity-create-nested-one-without-activity-documents.input';
import { Type } from 'class-transformer';

@InputType()
export class ActivityDocumentsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    activity_id!: string;

    @Field(() => String, {nullable:false})
    file_url!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Boolean, {nullable:true})
    is_validated?: boolean;

    @Field(() => String, {nullable:false})
    uploaded_by!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    validated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => ProjectActivityCreateNestedOneWithoutActivity_documentsInput, {nullable:true})
    @Type(() => ProjectActivityCreateNestedOneWithoutActivity_documentsInput)
    project_activity?: ProjectActivityCreateNestedOneWithoutActivity_documentsInput;
}
