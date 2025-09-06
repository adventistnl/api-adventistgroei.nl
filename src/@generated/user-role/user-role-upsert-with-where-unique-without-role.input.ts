import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';
import { Type } from 'class-transformer';
import { UserRoleUpdateWithoutRoleInput } from './user-role-update-without-role.input';
import { UserRoleCreateWithoutRoleInput } from './user-role-create-without-role.input';

@InputType()
export class UserRoleUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => UserRoleWhereUniqueInput, {nullable:false})
    @Type(() => UserRoleWhereUniqueInput)
    where!: Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>;

    @Field(() => UserRoleUpdateWithoutRoleInput, {nullable:false})
    @Type(() => UserRoleUpdateWithoutRoleInput)
    update!: UserRoleUpdateWithoutRoleInput;

    @Field(() => UserRoleCreateWithoutRoleInput, {nullable:false})
    @Type(() => UserRoleCreateWithoutRoleInput)
    create!: UserRoleCreateWithoutRoleInput;
}
