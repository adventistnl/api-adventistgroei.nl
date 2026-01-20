import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityWhereInput } from './project-activity-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityUpdateWithoutAssigneesInput } from './project-activity-update-without-assignees.input';

@InputType()
export class ProjectActivityUpdateToOneWithWhereWithoutAssigneesInput {

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;

    @Field(() => ProjectActivityUpdateWithoutAssigneesInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutAssigneesInput)
    data!: ProjectActivityUpdateWithoutAssigneesInput;
}
