import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutHistoryInput } from './project-update-without-history.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutHistoryInput } from './project-create-without-history.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutHistoryInput {

    @Field(() => ProjectUpdateWithoutHistoryInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutHistoryInput)
    update!: ProjectUpdateWithoutHistoryInput;

    @Field(() => ProjectCreateWithoutHistoryInput, {nullable:false})
    @Type(() => ProjectCreateWithoutHistoryInput)
    create!: ProjectCreateWithoutHistoryInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
