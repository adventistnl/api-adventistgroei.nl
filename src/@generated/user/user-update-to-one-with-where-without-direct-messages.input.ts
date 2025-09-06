import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDirect_messagesInput } from './user-update-without-direct-messages.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDirect_messagesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDirect_messagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutDirect_messagesInput)
    data!: UserUpdateWithoutDirect_messagesInput;
}
