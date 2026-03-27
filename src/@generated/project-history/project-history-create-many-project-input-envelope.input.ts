import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryCreateManyProjectInput } from './project-history-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectHistoryCreateManyProjectInputEnvelope {

    @Field(() => [ProjectHistoryCreateManyProjectInput], {nullable:false})
    @Type(() => ProjectHistoryCreateManyProjectInput)
    data!: Array<ProjectHistoryCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
