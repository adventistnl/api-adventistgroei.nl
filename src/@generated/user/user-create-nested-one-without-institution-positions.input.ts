import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutInstitution_positionsInput } from './user-create-without-institution-positions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutInstitution_positionsInput } from './user-create-or-connect-without-institution-positions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutInstitution_positionsInput {

    @Field(() => UserCreateWithoutInstitution_positionsInput, {nullable:true})
    @Type(() => UserCreateWithoutInstitution_positionsInput)
    create?: UserCreateWithoutInstitution_positionsInput;

    @Field(() => UserCreateOrConnectWithoutInstitution_positionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutInstitution_positionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutInstitution_positionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
