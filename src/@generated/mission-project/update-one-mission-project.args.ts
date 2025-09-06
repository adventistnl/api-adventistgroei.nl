import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissionProjectUpdateInput } from './mission-project-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';

@ArgsType()
export class UpdateOneMissionProjectArgs {

    @Field(() => MissionProjectUpdateInput, {nullable:false})
    @Type(() => MissionProjectUpdateInput)
    data!: MissionProjectUpdateInput;

    @Field(() => MissionProjectWhereUniqueInput, {nullable:false})
    @Type(() => MissionProjectWhereUniqueInput)
    where!: Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>;
}
