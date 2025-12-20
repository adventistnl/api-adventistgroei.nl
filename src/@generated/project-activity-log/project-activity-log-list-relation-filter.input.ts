import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogWhereInput } from './project-activity-log-where.input';

@InputType()
export class ProjectActivityLogListRelationFilter {

    @Field(() => ProjectActivityLogWhereInput, {nullable:true})
    every?: ProjectActivityLogWhereInput;

    @Field(() => ProjectActivityLogWhereInput, {nullable:true})
    some?: ProjectActivityLogWhereInput;

    @Field(() => ProjectActivityLogWhereInput, {nullable:true})
    none?: ProjectActivityLogWhereInput;
}
