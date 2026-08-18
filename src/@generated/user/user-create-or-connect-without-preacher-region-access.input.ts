import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPreacher_region_accessInput } from './user-create-without-preacher-region-access.input';

@InputType()
export class UserCreateOrConnectWithoutPreacher_region_accessInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => UserCreateWithoutPreacher_region_accessInput)
    create!: UserCreateWithoutPreacher_region_accessInput;
}
