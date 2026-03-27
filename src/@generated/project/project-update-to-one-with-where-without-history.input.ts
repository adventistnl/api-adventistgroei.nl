import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutHistoryInput } from './project-update-without-history.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutHistoryInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutHistoryInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutHistoryInput)
    data!: ProjectUpdateWithoutHistoryInput;
}
