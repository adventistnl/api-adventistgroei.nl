import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutActivitiesInput } from './project-update-without-activities.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutActivitiesInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutActivitiesInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutActivitiesInput)
    data!: ProjectUpdateWithoutActivitiesInput;
}
