import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityUpdateWithoutAssigneesInput } from './project-activity-update-without-assignees.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutAssigneesInput } from './project-activity-create-without-assignees.input';
import { ProjectActivityWhereInput } from './project-activity-where.input';

@InputType()
export class ProjectActivityUpsertWithoutAssigneesInput {

    @Field(() => ProjectActivityUpdateWithoutAssigneesInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutAssigneesInput)
    update!: ProjectActivityUpdateWithoutAssigneesInput;

    @Field(() => ProjectActivityCreateWithoutAssigneesInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutAssigneesInput)
    create!: ProjectActivityCreateWithoutAssigneesInput;

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;
}
