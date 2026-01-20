import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutLeaderInput } from './church-create-without-leader.input';

@InputType()
export class ChurchCreateOrConnectWithoutLeaderInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchCreateWithoutLeaderInput, {nullable:false})
    @Type(() => ChurchCreateWithoutLeaderInput)
    create!: ChurchCreateWithoutLeaderInput;
}
