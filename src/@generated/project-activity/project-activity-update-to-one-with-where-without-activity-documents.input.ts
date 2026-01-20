import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityWhereInput } from './project-activity-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityUpdateWithoutActivity_documentsInput } from './project-activity-update-without-activity-documents.input';

@InputType()
export class ProjectActivityUpdateToOneWithWhereWithoutActivity_documentsInput {

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;

    @Field(() => ProjectActivityUpdateWithoutActivity_documentsInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutActivity_documentsInput)
    data!: ProjectActivityUpdateWithoutActivity_documentsInput;
}
