import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutProjectsInput } from './church-create-without-projects.input';

@InputType()
export class ChurchCreateOrConnectWithoutProjectsInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchCreateWithoutProjectsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutProjectsInput)
    create!: ChurchCreateWithoutProjectsInput;
}
