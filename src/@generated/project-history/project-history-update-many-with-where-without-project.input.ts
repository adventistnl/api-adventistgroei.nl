import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryScalarWhereInput } from './project-history-scalar-where.input';
import { Type } from 'class-transformer';
import { ProjectHistoryUpdateManyMutationInput } from './project-history-update-many-mutation.input';

@InputType()
export class ProjectHistoryUpdateManyWithWhereWithoutProjectInput {

    @Field(() => ProjectHistoryScalarWhereInput, {nullable:false})
    @Type(() => ProjectHistoryScalarWhereInput)
    where!: ProjectHistoryScalarWhereInput;

    @Field(() => ProjectHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectHistoryUpdateManyMutationInput)
    data!: ProjectHistoryUpdateManyMutationInput;
}
