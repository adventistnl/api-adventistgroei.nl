import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissionProjectCreateManyInput } from './mission-project-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMissionProjectArgs {

    @Field(() => [MissionProjectCreateManyInput], {nullable:false})
    @Type(() => MissionProjectCreateManyInput)
    data!: Array<MissionProjectCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
