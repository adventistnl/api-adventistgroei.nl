import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPreacher_region_accessInput } from './user-create-without-preacher-region-access.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPreacher_region_accessInput } from './user-create-or-connect-without-preacher-region-access.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPreacher_region_accessInput {

    @Field(() => UserCreateWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => UserCreateWithoutPreacher_region_accessInput)
    create?: UserCreateWithoutPreacher_region_accessInput;

    @Field(() => UserCreateOrConnectWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPreacher_region_accessInput)
    connectOrCreate?: UserCreateOrConnectWithoutPreacher_region_accessInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
