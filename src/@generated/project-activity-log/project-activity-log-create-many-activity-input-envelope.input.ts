import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogCreateManyActivityInput } from './project-activity-log-create-many-activity.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityLogCreateManyActivityInputEnvelope {

    @Field(() => [ProjectActivityLogCreateManyActivityInput], {nullable:false})
    @Type(() => ProjectActivityLogCreateManyActivityInput)
    data!: Array<ProjectActivityLogCreateManyActivityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
