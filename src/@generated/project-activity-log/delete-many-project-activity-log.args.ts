import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityLogWhereInput } from './project-activity-log-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyProjectActivityLogArgs {

    @Field(() => ProjectActivityLogWhereInput, {nullable:true})
    @Type(() => ProjectActivityLogWhereInput)
    where?: ProjectActivityLogWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
