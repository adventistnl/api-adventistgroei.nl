import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectHistoryCreateInput } from './project-history-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProjectHistoryArgs {

    @Field(() => ProjectHistoryCreateInput, {nullable:false})
    @Type(() => ProjectHistoryCreateInput)
    data!: ProjectHistoryCreateInput;
}
