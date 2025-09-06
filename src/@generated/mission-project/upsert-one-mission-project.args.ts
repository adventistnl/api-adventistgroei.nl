import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';
import { Type } from 'class-transformer';
import { MissionProjectCreateInput } from './mission-project-create.input';
import { MissionProjectUpdateInput } from './mission-project-update.input';

@ArgsType()
export class UpsertOneMissionProjectArgs {

    @Field(() => MissionProjectWhereUniqueInput, {nullable:false})
    @Type(() => MissionProjectWhereUniqueInput)
    where!: Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>;

    @Field(() => MissionProjectCreateInput, {nullable:false})
    @Type(() => MissionProjectCreateInput)
    create!: MissionProjectCreateInput;

    @Field(() => MissionProjectUpdateInput, {nullable:false})
    @Type(() => MissionProjectUpdateInput)
    update!: MissionProjectUpdateInput;
}
