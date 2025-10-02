import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProject_activitiesInput } from './user-create-without-project-activities.input';

@InputType()
export class UserCreateOrConnectWithoutProject_activitiesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutProject_activitiesInput, {nullable:false})
    @Type(() => UserCreateWithoutProject_activitiesInput)
    create!: UserCreateWithoutProject_activitiesInput;
}
