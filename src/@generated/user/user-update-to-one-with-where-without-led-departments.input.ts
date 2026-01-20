import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutLed_departmentsInput } from './user-update-without-led-departments.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutLed_departmentsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutLed_departmentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLed_departmentsInput)
    data!: UserUpdateWithoutLed_departmentsInput;
}
