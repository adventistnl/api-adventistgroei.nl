import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectHistoryUpdateManyMutationInput } from './project-history-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProjectHistoryWhereInput } from './project-history-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProjectHistoryArgs {

    @Field(() => ProjectHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectHistoryUpdateManyMutationInput)
    data!: ProjectHistoryUpdateManyMutationInput;

    @Field(() => ProjectHistoryWhereInput, {nullable:true})
    @Type(() => ProjectHistoryWhereInput)
    where?: ProjectHistoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
