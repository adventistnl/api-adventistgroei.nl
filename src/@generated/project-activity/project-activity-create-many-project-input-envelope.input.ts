import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateManyProjectInput } from './project-activity-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityCreateManyProjectInputEnvelope {

    @Field(() => [ProjectActivityCreateManyProjectInput], {nullable:false})
    @Type(() => ProjectActivityCreateManyProjectInput)
    data!: Array<ProjectActivityCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
