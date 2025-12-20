import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityUpdateWithoutLogsInput } from './project-activity-update-without-logs.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutLogsInput } from './project-activity-create-without-logs.input';
import { ProjectActivityWhereInput } from './project-activity-where.input';

@InputType()
export class ProjectActivityUpsertWithoutLogsInput {

    @Field(() => ProjectActivityUpdateWithoutLogsInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutLogsInput)
    update!: ProjectActivityUpdateWithoutLogsInput;

    @Field(() => ProjectActivityCreateWithoutLogsInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutLogsInput)
    create!: ProjectActivityCreateWithoutLogsInput;

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;
}
