import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogCreateManyUserInput } from './project-activity-log-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityLogCreateManyUserInputEnvelope {

    @Field(() => [ProjectActivityLogCreateManyUserInput], {nullable:false})
    @Type(() => ProjectActivityLogCreateManyUserInput)
    data!: Array<ProjectActivityLogCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
