import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutActivity_assignmentsInput } from './user-update-without-activity-assignments.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutActivity_assignmentsInput } from './user-create-without-activity-assignments.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutActivity_assignmentsInput {

    @Field(() => UserUpdateWithoutActivity_assignmentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutActivity_assignmentsInput)
    update!: UserUpdateWithoutActivity_assignmentsInput;

    @Field(() => UserCreateWithoutActivity_assignmentsInput, {nullable:false})
    @Type(() => UserCreateWithoutActivity_assignmentsInput)
    create!: UserCreateWithoutActivity_assignmentsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
