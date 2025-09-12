import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityCreateInput } from './project-activity-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProjectActivityArgs {

    @Field(() => ProjectActivityCreateInput, {nullable:false})
    @Type(() => ProjectActivityCreateInput)
    data!: ProjectActivityCreateInput;
}
