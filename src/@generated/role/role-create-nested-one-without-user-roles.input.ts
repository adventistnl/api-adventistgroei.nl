import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUser_rolesInput } from './role-create-without-user-roles.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutUser_rolesInput } from './role-create-or-connect-without-user-roles.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutUser_rolesInput {

    @Field(() => RoleCreateWithoutUser_rolesInput, {nullable:true})
    @Type(() => RoleCreateWithoutUser_rolesInput)
    create?: RoleCreateWithoutUser_rolesInput;

    @Field(() => RoleCreateOrConnectWithoutUser_rolesInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUser_rolesInput)
    connectOrCreate?: RoleCreateOrConnectWithoutUser_rolesInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'key_code'>;
}
