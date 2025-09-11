import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVoluntary_projectsInput } from './user-create-without-voluntary-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVoluntary_projectsInput } from './user-create-or-connect-without-voluntary-projects.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutVoluntary_projectsInput {

    @Field(() => UserCreateWithoutVoluntary_projectsInput, {nullable:true})
    @Type(() => UserCreateWithoutVoluntary_projectsInput)
    create?: UserCreateWithoutVoluntary_projectsInput;

    @Field(() => UserCreateOrConnectWithoutVoluntary_projectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVoluntary_projectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutVoluntary_projectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
