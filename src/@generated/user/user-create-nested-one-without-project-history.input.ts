import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProject_historyInput } from './user-create-without-project-history.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProject_historyInput } from './user-create-or-connect-without-project-history.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProject_historyInput {

    @Field(() => UserCreateWithoutProject_historyInput, {nullable:true})
    @Type(() => UserCreateWithoutProject_historyInput)
    create?: UserCreateWithoutProject_historyInput;

    @Field(() => UserCreateOrConnectWithoutProject_historyInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProject_historyInput)
    connectOrCreate?: UserCreateOrConnectWithoutProject_historyInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
