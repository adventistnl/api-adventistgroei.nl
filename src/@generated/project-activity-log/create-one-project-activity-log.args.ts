import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityLogCreateInput } from './project-activity-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProjectActivityLogArgs {

    @Field(() => ProjectActivityLogCreateInput, {nullable:false})
    @Type(() => ProjectActivityLogCreateInput)
    data!: ProjectActivityLogCreateInput;
}
