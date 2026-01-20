import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLed_churchInput } from './user-update-without-led-church.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLed_churchInput } from './user-create-without-led-church.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutLed_churchInput {

    @Field(() => UserUpdateWithoutLed_churchInput, {nullable:false})
    @Type(() => UserUpdateWithoutLed_churchInput)
    update!: UserUpdateWithoutLed_churchInput;

    @Field(() => UserCreateWithoutLed_churchInput, {nullable:false})
    @Type(() => UserCreateWithoutLed_churchInput)
    create!: UserCreateWithoutLed_churchInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
