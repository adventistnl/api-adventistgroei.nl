import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityUpdateWithoutActivity_documentsInput } from './project-activity-update-without-activity-documents.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutActivity_documentsInput } from './project-activity-create-without-activity-documents.input';
import { ProjectActivityWhereInput } from './project-activity-where.input';

@InputType()
export class ProjectActivityUpsertWithoutActivity_documentsInput {

    @Field(() => ProjectActivityUpdateWithoutActivity_documentsInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutActivity_documentsInput)
    update!: ProjectActivityUpdateWithoutActivity_documentsInput;

    @Field(() => ProjectActivityCreateWithoutActivity_documentsInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutActivity_documentsInput)
    create!: ProjectActivityCreateWithoutActivity_documentsInput;

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;
}
