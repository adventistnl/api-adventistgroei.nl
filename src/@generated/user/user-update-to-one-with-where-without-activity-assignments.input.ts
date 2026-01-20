import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutActivity_assignmentsInput } from './user-update-without-activity-assignments.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutActivity_assignmentsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutActivity_assignmentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutActivity_assignmentsInput)
    data!: UserUpdateWithoutActivity_assignmentsInput;
}
