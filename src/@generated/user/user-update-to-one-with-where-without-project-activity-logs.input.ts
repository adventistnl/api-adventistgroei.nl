import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProject_activity_logsInput } from './user-update-without-project-activity-logs.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutProject_activity_logsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutProject_activity_logsInput, {nullable:false})
    @Type(() => UserUpdateWithoutProject_activity_logsInput)
    data!: UserUpdateWithoutProject_activity_logsInput;
}
