import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProject_activity_logsInput } from './user-create-without-project-activity-logs.input';

@InputType()
export class UserCreateOrConnectWithoutProject_activity_logsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutProject_activity_logsInput, {nullable:false})
    @Type(() => UserCreateWithoutProject_activity_logsInput)
    create!: UserCreateWithoutProject_activity_logsInput;
}
