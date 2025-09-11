import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVoluntary_projectsInput } from './user-create-without-voluntary-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVoluntary_projectsInput } from './user-create-or-connect-without-voluntary-projects.input';
import { UserUpsertWithoutVoluntary_projectsInput } from './user-upsert-without-voluntary-projects.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutVoluntary_projectsInput } from './user-update-to-one-with-where-without-voluntary-projects.input';

@InputType()
export class UserUpdateOneRequiredWithoutVoluntary_projectsNestedInput {

    @Field(() => UserCreateWithoutVoluntary_projectsInput, {nullable:true})
    @Type(() => UserCreateWithoutVoluntary_projectsInput)
    create?: UserCreateWithoutVoluntary_projectsInput;

    @Field(() => UserCreateOrConnectWithoutVoluntary_projectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVoluntary_projectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutVoluntary_projectsInput;

    @Field(() => UserUpsertWithoutVoluntary_projectsInput, {nullable:true})
    @Type(() => UserUpsertWithoutVoluntary_projectsInput)
    upsert?: UserUpsertWithoutVoluntary_projectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutVoluntary_projectsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutVoluntary_projectsInput)
    update?: UserUpdateToOneWithWhereWithoutVoluntary_projectsInput;
}
