import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';
import { Type } from 'class-transformer';
import { UserRoleUpdateWithoutRoleInput } from './user-role-update-without-role.input';

@InputType()
export class UserRoleUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => UserRoleWhereUniqueInput, {nullable:false})
    @Type(() => UserRoleWhereUniqueInput)
    where!: Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>;

    @Field(() => UserRoleUpdateWithoutRoleInput, {nullable:false})
    @Type(() => UserRoleUpdateWithoutRoleInput)
    data!: UserRoleUpdateWithoutRoleInput;
}
