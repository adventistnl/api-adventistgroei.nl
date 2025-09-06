import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMissionProjectArgs {

    @Field(() => MissionProjectWhereUniqueInput, {nullable:false})
    @Type(() => MissionProjectWhereUniqueInput)
    where!: Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>;
}
