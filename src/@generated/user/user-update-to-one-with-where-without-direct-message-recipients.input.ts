import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDirect_message_recipientsInput } from './user-update-without-direct-message-recipients.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDirect_message_recipientsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => UserUpdateWithoutDirect_message_recipientsInput)
    data!: UserUpdateWithoutDirect_message_recipientsInput;
}
