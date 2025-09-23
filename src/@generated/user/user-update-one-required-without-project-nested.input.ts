import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectInput } from './user-create-without-project.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProjectInput } from './user-create-or-connect-without-project.input';
import { UserUpsertWithoutProjectInput } from './user-upsert-without-project.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProjectInput } from './user-update-to-one-with-where-without-project.input';

@InputType()
export class UserUpdateOneRequiredWithoutProjectNestedInput {

    @Field(() => UserCreateWithoutProjectInput, {nullable:true})
    @Type(() => UserCreateWithoutProjectInput)
    create?: UserCreateWithoutProjectInput;

    @Field(() => UserCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProjectInput)
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput;

    @Field(() => UserUpsertWithoutProjectInput, {nullable:true})
    @Type(() => UserUpsertWithoutProjectInput)
    upsert?: UserUpsertWithoutProjectInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutProjectInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutProjectInput)
    update?: UserUpdateToOneWithWhereWithoutProjectInput;
}
