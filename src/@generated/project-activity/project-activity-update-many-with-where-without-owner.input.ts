import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityScalarWhereInput } from './project-activity-scalar-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityUpdateManyMutationInput } from './project-activity-update-many-mutation.input';

@InputType()
export class ProjectActivityUpdateManyWithWhereWithoutOwnerInput {

    @Field(() => ProjectActivityScalarWhereInput, {nullable:false})
    @Type(() => ProjectActivityScalarWhereInput)
    where!: ProjectActivityScalarWhereInput;

    @Field(() => ProjectActivityUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectActivityUpdateManyMutationInput)
    data!: ProjectActivityUpdateManyMutationInput;
}
