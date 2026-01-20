import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyChurch_departmentInput } from './project-create-many-church-department.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyChurch_departmentInputEnvelope {

    @Field(() => [ProjectCreateManyChurch_departmentInput], {nullable:false})
    @Type(() => ProjectCreateManyChurch_departmentInput)
    data!: Array<ProjectCreateManyChurch_departmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
