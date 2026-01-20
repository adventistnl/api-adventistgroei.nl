import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLed_departmentsInput } from './user-update-without-led-departments.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLed_departmentsInput } from './user-create-without-led-departments.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutLed_departmentsInput {

    @Field(() => UserUpdateWithoutLed_departmentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLed_departmentsInput)
    update!: UserUpdateWithoutLed_departmentsInput;

    @Field(() => UserCreateWithoutLed_departmentsInput, {nullable:false})
    @Type(() => UserCreateWithoutLed_departmentsInput)
    create!: UserCreateWithoutLed_departmentsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
