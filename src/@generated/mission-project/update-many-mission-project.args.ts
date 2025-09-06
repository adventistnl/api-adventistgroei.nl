import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissionProjectUpdateManyMutationInput } from './mission-project-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MissionProjectWhereInput } from './mission-project-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMissionProjectArgs {

    @Field(() => MissionProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => MissionProjectUpdateManyMutationInput)
    data!: MissionProjectUpdateManyMutationInput;

    @Field(() => MissionProjectWhereInput, {nullable:true})
    @Type(() => MissionProjectWhereInput)
    where?: MissionProjectWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
