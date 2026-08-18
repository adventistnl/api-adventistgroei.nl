import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAvailabilitiesInput } from './user-update-without-availabilities.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAvailabilitiesInput } from './user-create-without-availabilities.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAvailabilitiesInput {

    @Field(() => UserUpdateWithoutAvailabilitiesInput, {nullable:false})
    @Type(() => UserUpdateWithoutAvailabilitiesInput)
    update!: UserUpdateWithoutAvailabilitiesInput;

    @Field(() => UserCreateWithoutAvailabilitiesInput, {nullable:false})
    @Type(() => UserCreateWithoutAvailabilitiesInput)
    create!: UserCreateWithoutAvailabilitiesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
