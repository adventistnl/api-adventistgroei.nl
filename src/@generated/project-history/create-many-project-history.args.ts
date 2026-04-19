import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectHistoryCreateManyInput } from './project-history-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProjectHistoryArgs {

    @Field(() => [ProjectHistoryCreateManyInput], {nullable:false})
    @Type(() => ProjectHistoryCreateManyInput)
    data!: Array<ProjectHistoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
