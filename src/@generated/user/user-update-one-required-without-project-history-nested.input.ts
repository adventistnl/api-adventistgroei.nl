import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProject_historyInput } from './user-create-without-project-history.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProject_historyInput } from './user-create-or-connect-without-project-history.input';
import { UserUpsertWithoutProject_historyInput } from './user-upsert-without-project-history.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProject_historyInput } from './user-update-to-one-with-where-without-project-history.input';

@InputType()
export class UserUpdateOneRequiredWithoutProject_historyNestedInput {

    @Field(() => UserCreateWithoutProject_historyInput, {nullable:true})
    @Type(() => UserCreateWithoutProject_historyInput)
    create?: UserCreateWithoutProject_historyInput;

    @Field(() => UserCreateOrConnectWithoutProject_historyInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProject_historyInput)
    connectOrCreate?: UserCreateOrConnectWithoutProject_historyInput;

    @Field(() => UserUpsertWithoutProject_historyInput, {nullable:true})
    @Type(() => UserUpsertWithoutProject_historyInput)
    upsert?: UserUpsertWithoutProject_historyInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutProject_historyInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutProject_historyInput)
    update?: UserUpdateToOneWithWhereWithoutProject_historyInput;
}
