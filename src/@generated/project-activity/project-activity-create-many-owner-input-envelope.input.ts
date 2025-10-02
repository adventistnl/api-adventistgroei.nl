import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateManyOwnerInput } from './project-activity-create-many-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityCreateManyOwnerInputEnvelope {

    @Field(() => [ProjectActivityCreateManyOwnerInput], {nullable:false})
    @Type(() => ProjectActivityCreateManyOwnerInput)
    data!: Array<ProjectActivityCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
