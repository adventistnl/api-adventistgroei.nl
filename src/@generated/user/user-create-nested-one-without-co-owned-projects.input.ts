import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCo_owned_projectsInput } from './user-create-without-co-owned-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCo_owned_projectsInput } from './user-create-or-connect-without-co-owned-projects.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCo_owned_projectsInput {

    @Field(() => UserCreateWithoutCo_owned_projectsInput, {nullable:true})
    @Type(() => UserCreateWithoutCo_owned_projectsInput)
    create?: UserCreateWithoutCo_owned_projectsInput;

    @Field(() => UserCreateOrConnectWithoutCo_owned_projectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCo_owned_projectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCo_owned_projectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
