import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyChurchInput } from './project-create-many-church.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyChurchInputEnvelope {

    @Field(() => [ProjectCreateManyChurchInput], {nullable:false})
    @Type(() => ProjectCreateManyChurchInput)
    data!: Array<ProjectCreateManyChurchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
