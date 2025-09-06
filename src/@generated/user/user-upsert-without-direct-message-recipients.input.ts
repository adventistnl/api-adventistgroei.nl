import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDirect_message_recipientsInput } from './user-update-without-direct-message-recipients.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDirect_message_recipientsInput } from './user-create-without-direct-message-recipients.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDirect_message_recipientsInput {

    @Field(() => UserUpdateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => UserUpdateWithoutDirect_message_recipientsInput)
    update!: UserUpdateWithoutDirect_message_recipientsInput;

    @Field(() => UserCreateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => UserCreateWithoutDirect_message_recipientsInput)
    create!: UserCreateWithoutDirect_message_recipientsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
