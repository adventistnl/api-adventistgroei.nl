import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissionProjectWhereInput } from './mission-project-where.input';
import { Type } from 'class-transformer';

@InputType()
export class MissionProjectListRelationFilter {

    @Field(() => MissionProjectWhereInput, {nullable:true})
    @Type(() => MissionProjectWhereInput)
    every?: MissionProjectWhereInput;

    @Field(() => MissionProjectWhereInput, {nullable:true})
    @Type(() => MissionProjectWhereInput)
    some?: MissionProjectWhereInput;

    @Field(() => MissionProjectWhereInput, {nullable:true})
    @Type(() => MissionProjectWhereInput)
    none?: MissionProjectWhereInput;
}
