import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityLogUpdateManyMutationInput } from './project-activity-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogWhereInput } from './project-activity-log-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProjectActivityLogArgs {

    @Field(() => ProjectActivityLogUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectActivityLogUpdateManyMutationInput)
    data!: ProjectActivityLogUpdateManyMutationInput;

    @Field(() => ProjectActivityLogWhereInput, {nullable:true})
    @Type(() => ProjectActivityLogWhereInput)
    where?: ProjectActivityLogWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
