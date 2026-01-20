import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityWhereInput } from './project-activity-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityUpdateWithoutLogsInput } from './project-activity-update-without-logs.input';

@InputType()
export class ProjectActivityUpdateToOneWithWhereWithoutLogsInput {

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;

    @Field(() => ProjectActivityUpdateWithoutLogsInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutLogsInput)
    data!: ProjectActivityUpdateWithoutLogsInput;
}
