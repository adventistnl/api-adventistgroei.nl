import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProject_activity_logsInput } from './user-create-without-project-activity-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProject_activity_logsInput } from './user-create-or-connect-without-project-activity-logs.input';
import { UserUpsertWithoutProject_activity_logsInput } from './user-upsert-without-project-activity-logs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProject_activity_logsInput } from './user-update-to-one-with-where-without-project-activity-logs.input';

@InputType()
export class UserUpdateOneRequiredWithoutProject_activity_logsNestedInput {

    @Field(() => UserCreateWithoutProject_activity_logsInput, {nullable:true})
    @Type(() => UserCreateWithoutProject_activity_logsInput)
    create?: UserCreateWithoutProject_activity_logsInput;

    @Field(() => UserCreateOrConnectWithoutProject_activity_logsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProject_activity_logsInput)
    connectOrCreate?: UserCreateOrConnectWithoutProject_activity_logsInput;

    @Field(() => UserUpsertWithoutProject_activity_logsInput, {nullable:true})
    @Type(() => UserUpsertWithoutProject_activity_logsInput)
    upsert?: UserUpsertWithoutProject_activity_logsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutProject_activity_logsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutProject_activity_logsInput)
    update?: UserUpdateToOneWithWhereWithoutProject_activity_logsInput;
}
