import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPreacher_region_accessInput } from './user-update-without-preacher-region-access.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPreacher_region_accessInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => UserUpdateWithoutPreacher_region_accessInput)
    data!: UserUpdateWithoutPreacher_region_accessInput;
}
