import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPreacher_region_accessInput } from './user-update-without-preacher-region-access.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPreacher_region_accessInput } from './user-create-without-preacher-region-access.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPreacher_region_accessInput {

    @Field(() => UserUpdateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => UserUpdateWithoutPreacher_region_accessInput)
    update!: UserUpdateWithoutPreacher_region_accessInput;

    @Field(() => UserCreateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => UserCreateWithoutPreacher_region_accessInput)
    create!: UserCreateWithoutPreacher_region_accessInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
