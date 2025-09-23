import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectInput } from './user-create-without-project.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProjectInput } from './user-create-or-connect-without-project.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProjectInput {

    @Field(() => UserCreateWithoutProjectInput, {nullable:true})
    @Type(() => UserCreateWithoutProjectInput)
    create?: UserCreateWithoutProjectInput;

    @Field(() => UserCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProjectInput)
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
