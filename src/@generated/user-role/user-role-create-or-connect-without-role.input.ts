import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';
import { Type } from 'class-transformer';
import { UserRoleCreateWithoutRoleInput } from './user-role-create-without-role.input';

@InputType()
export class UserRoleCreateOrConnectWithoutRoleInput {

    @Field(() => UserRoleWhereUniqueInput, {nullable:false})
    @Type(() => UserRoleWhereUniqueInput)
    where!: Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>;

    @Field(() => UserRoleCreateWithoutRoleInput, {nullable:false})
    @Type(() => UserRoleCreateWithoutRoleInput)
    create!: UserRoleCreateWithoutRoleInput;
}
