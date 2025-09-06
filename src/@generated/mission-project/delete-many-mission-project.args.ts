import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissionProjectWhereInput } from './mission-project-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMissionProjectArgs {

    @Field(() => MissionProjectWhereInput, {nullable:true})
    @Type(() => MissionProjectWhereInput)
    where?: MissionProjectWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
