import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPreacher_region_accessInput } from './user-create-without-preacher-region-access.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPreacher_region_accessInput } from './user-create-or-connect-without-preacher-region-access.input';
import { UserUpsertWithoutPreacher_region_accessInput } from './user-upsert-without-preacher-region-access.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPreacher_region_accessInput } from './user-update-to-one-with-where-without-preacher-region-access.input';

@InputType()
export class UserUpdateOneRequiredWithoutPreacher_region_accessNestedInput {

    @Field(() => UserCreateWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => UserCreateWithoutPreacher_region_accessInput)
    create?: UserCreateWithoutPreacher_region_accessInput;

    @Field(() => UserCreateOrConnectWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPreacher_region_accessInput)
    connectOrCreate?: UserCreateOrConnectWithoutPreacher_region_accessInput;

    @Field(() => UserUpsertWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => UserUpsertWithoutPreacher_region_accessInput)
    upsert?: UserUpsertWithoutPreacher_region_accessInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPreacher_region_accessInput)
    update?: UserUpdateToOneWithWhereWithoutPreacher_region_accessInput;
}
