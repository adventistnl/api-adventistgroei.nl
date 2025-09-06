import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDirect_messagesInput } from './user-update-without-direct-messages.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDirect_messagesInput } from './user-create-without-direct-messages.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDirect_messagesInput {

    @Field(() => UserUpdateWithoutDirect_messagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutDirect_messagesInput)
    update!: UserUpdateWithoutDirect_messagesInput;

    @Field(() => UserCreateWithoutDirect_messagesInput, {nullable:false})
    @Type(() => UserCreateWithoutDirect_messagesInput)
    create!: UserCreateWithoutDirect_messagesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
