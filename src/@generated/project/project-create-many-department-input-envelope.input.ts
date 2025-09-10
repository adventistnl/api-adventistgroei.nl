import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyDepartmentInput } from './project-create-many-department.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyDepartmentInputEnvelope {

    @Field(() => [ProjectCreateManyDepartmentInput], {nullable:false})
    @Type(() => ProjectCreateManyDepartmentInput)
    data!: Array<ProjectCreateManyDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
