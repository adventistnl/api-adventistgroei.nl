import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutUsersInput } from './church-create-without-users.input';

@InputType()
export class ChurchCreateOrConnectWithoutUsersInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchCreateWithoutUsersInput, {nullable:false})
    @Type(() => ChurchCreateWithoutUsersInput)
    create!: ChurchCreateWithoutUsersInput;
}
