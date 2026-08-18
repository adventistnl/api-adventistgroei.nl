import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAvailabilitiesInput } from './user-update-without-availabilities.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAvailabilitiesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAvailabilitiesInput, {nullable:false})
    @Type(() => UserUpdateWithoutAvailabilitiesInput)
    data!: UserUpdateWithoutAvailabilitiesInput;
}
