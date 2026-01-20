import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProject_activity_logsInput } from './user-update-without-project-activity-logs.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProject_activity_logsInput } from './user-create-without-project-activity-logs.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutProject_activity_logsInput {

    @Field(() => UserUpdateWithoutProject_activity_logsInput, {nullable:false})
    @Type(() => UserUpdateWithoutProject_activity_logsInput)
    update!: UserUpdateWithoutProject_activity_logsInput;

    @Field(() => UserCreateWithoutProject_activity_logsInput, {nullable:false})
    @Type(() => UserCreateWithoutProject_activity_logsInput)
    create!: UserCreateWithoutProject_activity_logsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
