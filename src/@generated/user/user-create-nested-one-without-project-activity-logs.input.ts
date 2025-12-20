import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProject_activity_logsInput } from './user-create-without-project-activity-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProject_activity_logsInput } from './user-create-or-connect-without-project-activity-logs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProject_activity_logsInput {

    @Field(() => UserCreateWithoutProject_activity_logsInput, {nullable:true})
    @Type(() => UserCreateWithoutProject_activity_logsInput)
    create?: UserCreateWithoutProject_activity_logsInput;

    @Field(() => UserCreateOrConnectWithoutProject_activity_logsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProject_activity_logsInput)
    connectOrCreate?: UserCreateOrConnectWithoutProject_activity_logsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
