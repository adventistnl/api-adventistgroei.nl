import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutLed_churchInput } from './user-update-without-led-church.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutLed_churchInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutLed_churchInput, {nullable:false})
    @Type(() => UserUpdateWithoutLed_churchInput)
    data!: UserUpdateWithoutLed_churchInput;
}
