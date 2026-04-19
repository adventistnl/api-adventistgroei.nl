import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutInstitution_positionsInput } from './user-create-without-institution-positions.input';

@InputType()
export class UserCreateOrConnectWithoutInstitution_positionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutInstitution_positionsInput, {nullable:false})
    @Type(() => UserCreateWithoutInstitution_positionsInput)
    create!: UserCreateWithoutInstitution_positionsInput;
}
