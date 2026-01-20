import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityLogCreateManyInput } from './project-activity-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProjectActivityLogArgs {

    @Field(() => [ProjectActivityLogCreateManyInput], {nullable:false})
    @Type(() => ProjectActivityLogCreateManyInput)
    data!: Array<ProjectActivityLogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
