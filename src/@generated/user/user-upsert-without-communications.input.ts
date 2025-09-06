import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCommunicationsInput } from './user-update-without-communications.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCommunicationsInput } from './user-create-without-communications.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCommunicationsInput {

    @Field(() => UserUpdateWithoutCommunicationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommunicationsInput)
    update!: UserUpdateWithoutCommunicationsInput;

    @Field(() => UserCreateWithoutCommunicationsInput, {nullable:false})
    @Type(() => UserCreateWithoutCommunicationsInput)
    create!: UserCreateWithoutCommunicationsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
