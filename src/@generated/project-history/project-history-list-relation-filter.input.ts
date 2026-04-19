import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryWhereInput } from './project-history-where.input';

@InputType()
export class ProjectHistoryListRelationFilter {

    @Field(() => ProjectHistoryWhereInput, {nullable:true})
    every?: ProjectHistoryWhereInput;

    @Field(() => ProjectHistoryWhereInput, {nullable:true})
    some?: ProjectHistoryWhereInput;

    @Field(() => ProjectHistoryWhereInput, {nullable:true})
    none?: ProjectHistoryWhereInput;
}
