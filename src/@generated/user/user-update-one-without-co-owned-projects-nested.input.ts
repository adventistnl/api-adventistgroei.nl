import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCo_owned_projectsInput } from './user-create-without-co-owned-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCo_owned_projectsInput } from './user-create-or-connect-without-co-owned-projects.input';
import { UserUpsertWithoutCo_owned_projectsInput } from './user-upsert-without-co-owned-projects.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCo_owned_projectsInput } from './user-update-to-one-with-where-without-co-owned-projects.input';

@InputType()
export class UserUpdateOneWithoutCo_owned_projectsNestedInput {

    @Field(() => UserCreateWithoutCo_owned_projectsInput, {nullable:true})
    @Type(() => UserCreateWithoutCo_owned_projectsInput)
    create?: UserCreateWithoutCo_owned_projectsInput;

    @Field(() => UserCreateOrConnectWithoutCo_owned_projectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCo_owned_projectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCo_owned_projectsInput;

    @Field(() => UserUpsertWithoutCo_owned_projectsInput, {nullable:true})
    @Type(() => UserUpsertWithoutCo_owned_projectsInput)
    upsert?: UserUpsertWithoutCo_owned_projectsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCo_owned_projectsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCo_owned_projectsInput)
    update?: UserUpdateToOneWithWhereWithoutCo_owned_projectsInput;
}
