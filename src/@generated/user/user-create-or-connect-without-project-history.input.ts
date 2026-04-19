import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProject_historyInput } from './user-create-without-project-history.input';

@InputType()
export class UserCreateOrConnectWithoutProject_historyInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutProject_historyInput, {nullable:false})
    @Type(() => UserCreateWithoutProject_historyInput)
    create!: UserCreateWithoutProject_historyInput;
}
