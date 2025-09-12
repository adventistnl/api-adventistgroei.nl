import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityCreateManyInput } from './project-activity-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProjectActivityArgs {

    @Field(() => [ProjectActivityCreateManyInput], {nullable:false})
    @Type(() => ProjectActivityCreateManyInput)
    data!: Array<ProjectActivityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
