import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogScalarWhereInput } from './project-activity-log-scalar-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogUpdateManyMutationInput } from './project-activity-log-update-many-mutation.input';

@InputType()
export class ProjectActivityLogUpdateManyWithWhereWithoutActivityInput {

    @Field(() => ProjectActivityLogScalarWhereInput, {nullable:false})
    @Type(() => ProjectActivityLogScalarWhereInput)
    where!: ProjectActivityLogScalarWhereInput;

    @Field(() => ProjectActivityLogUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectActivityLogUpdateManyMutationInput)
    data!: ProjectActivityLogUpdateManyMutationInput;
}
