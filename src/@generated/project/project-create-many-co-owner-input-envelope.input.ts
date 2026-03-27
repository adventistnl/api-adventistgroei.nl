import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyCo_ownerInput } from './project-create-many-co-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyCo_ownerInputEnvelope {

    @Field(() => [ProjectCreateManyCo_ownerInput], {nullable:false})
    @Type(() => ProjectCreateManyCo_ownerInput)
    data!: Array<ProjectCreateManyCo_ownerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
