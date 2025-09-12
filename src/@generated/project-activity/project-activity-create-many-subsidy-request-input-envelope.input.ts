import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateManySubsidy_requestInput } from './project-activity-create-many-subsidy-request.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityCreateManySubsidy_requestInputEnvelope {

    @Field(() => [ProjectActivityCreateManySubsidy_requestInput], {nullable:false})
    @Type(() => ProjectActivityCreateManySubsidy_requestInput)
    data!: Array<ProjectActivityCreateManySubsidy_requestInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
