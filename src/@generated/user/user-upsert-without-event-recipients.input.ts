import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEvent_recipientsInput } from './user-update-without-event-recipients.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEvent_recipientsInput } from './user-create-without-event-recipients.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutEvent_recipientsInput {

    @Field(() => UserUpdateWithoutEvent_recipientsInput, {nullable:false})
    @Type(() => UserUpdateWithoutEvent_recipientsInput)
    update!: UserUpdateWithoutEvent_recipientsInput;

    @Field(() => UserCreateWithoutEvent_recipientsInput, {nullable:false})
    @Type(() => UserCreateWithoutEvent_recipientsInput)
    create!: UserCreateWithoutEvent_recipientsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
