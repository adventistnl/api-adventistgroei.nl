import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCommunicationsInput } from './user-update-without-communications.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCommunicationsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCommunicationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommunicationsInput)
    data!: UserUpdateWithoutCommunicationsInput;
}
