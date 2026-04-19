import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectHistoryWhereInput } from './project-history-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyProjectHistoryArgs {

    @Field(() => ProjectHistoryWhereInput, {nullable:true})
    @Type(() => ProjectHistoryWhereInput)
    where?: ProjectHistoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
