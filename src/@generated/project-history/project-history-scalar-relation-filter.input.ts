import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryWhereInput } from './project-history-where.input';

@InputType()
export class ProjectHistoryScalarRelationFilter {

    @Field(() => ProjectHistoryWhereInput, {nullable:true})
    is?: ProjectHistoryWhereInput;

    @Field(() => ProjectHistoryWhereInput, {nullable:true})
    isNot?: ProjectHistoryWhereInput;
}
