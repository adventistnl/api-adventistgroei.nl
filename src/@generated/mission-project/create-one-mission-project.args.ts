import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissionProjectCreateInput } from './mission-project-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMissionProjectArgs {

    @Field(() => MissionProjectCreateInput, {nullable:false})
    @Type(() => MissionProjectCreateInput)
    data!: MissionProjectCreateInput;
}
