import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUser_rolesInput } from './role-create-without-user-roles.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutUser_rolesInput } from './role-create-or-connect-without-user-roles.input';
import { RoleUpsertWithoutUser_rolesInput } from './role-upsert-without-user-roles.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateToOneWithWhereWithoutUser_rolesInput } from './role-update-to-one-with-where-without-user-roles.input';

@InputType()
export class RoleUpdateOneRequiredWithoutUser_rolesNestedInput {

    @Field(() => RoleCreateWithoutUser_rolesInput, {nullable:true})
    @Type(() => RoleCreateWithoutUser_rolesInput)
    create?: RoleCreateWithoutUser_rolesInput;

    @Field(() => RoleCreateOrConnectWithoutUser_rolesInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUser_rolesInput)
    connectOrCreate?: RoleCreateOrConnectWithoutUser_rolesInput;

    @Field(() => RoleUpsertWithoutUser_rolesInput, {nullable:true})
    @Type(() => RoleUpsertWithoutUser_rolesInput)
    upsert?: RoleUpsertWithoutUser_rolesInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'key_code'>;

    @Field(() => RoleUpdateToOneWithWhereWithoutUser_rolesInput, {nullable:true})
    @Type(() => RoleUpdateToOneWithWhereWithoutUser_rolesInput)
    update?: RoleUpdateToOneWithWhereWithoutUser_rolesInput;
}
