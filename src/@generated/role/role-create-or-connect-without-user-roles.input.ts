import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutUser_rolesInput } from './role-create-without-user-roles.input';

@InputType()
export class RoleCreateOrConnectWithoutUser_rolesInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'key_code'>;

    @Field(() => RoleCreateWithoutUser_rolesInput, {nullable:false})
    @Type(() => RoleCreateWithoutUser_rolesInput)
    create!: RoleCreateWithoutUser_rolesInput;
}
