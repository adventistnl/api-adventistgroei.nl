import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCo_owned_projectsInput } from './user-create-without-co-owned-projects.input';

@InputType()
export class UserCreateOrConnectWithoutCo_owned_projectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutCo_owned_projectsInput, {nullable:false})
    @Type(() => UserCreateWithoutCo_owned_projectsInput)
    create!: UserCreateWithoutCo_owned_projectsInput;
}
