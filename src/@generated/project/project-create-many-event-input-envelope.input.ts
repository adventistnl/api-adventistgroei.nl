import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyEventInput } from './project-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyEventInputEnvelope {

    @Field(() => [ProjectCreateManyEventInput], {nullable:false})
    @Type(() => ProjectCreateManyEventInput)
    data!: Array<ProjectCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
