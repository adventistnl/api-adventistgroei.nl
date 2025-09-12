import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutActivitiesInput } from './project-update-without-activities.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutActivitiesInput } from './project-create-without-activities.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutActivitiesInput {

    @Field(() => ProjectUpdateWithoutActivitiesInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutActivitiesInput)
    update!: ProjectUpdateWithoutActivitiesInput;

    @Field(() => ProjectCreateWithoutActivitiesInput, {nullable:false})
    @Type(() => ProjectCreateWithoutActivitiesInput)
    create!: ProjectCreateWithoutActivitiesInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
