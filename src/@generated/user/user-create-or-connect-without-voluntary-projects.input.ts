import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVoluntary_projectsInput } from './user-create-without-voluntary-projects.input';

@InputType()
export class UserCreateOrConnectWithoutVoluntary_projectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutVoluntary_projectsInput, {nullable:false})
    @Type(() => UserCreateWithoutVoluntary_projectsInput)
    create!: UserCreateWithoutVoluntary_projectsInput;
}
