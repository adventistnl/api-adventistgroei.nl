import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryCreateManyUserInput } from './project-history-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectHistoryCreateManyUserInputEnvelope {

    @Field(() => [ProjectHistoryCreateManyUserInput], {nullable:false})
    @Type(() => ProjectHistoryCreateManyUserInput)
    data!: Array<ProjectHistoryCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
