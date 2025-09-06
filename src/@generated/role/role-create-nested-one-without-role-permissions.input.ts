import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutRole_permissionsInput } from './role-create-without-role-permissions.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutRole_permissionsInput } from './role-create-or-connect-without-role-permissions.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutRole_permissionsInput {

    @Field(() => RoleCreateWithoutRole_permissionsInput, {nullable:true})
    @Type(() => RoleCreateWithoutRole_permissionsInput)
    create?: RoleCreateWithoutRole_permissionsInput;

    @Field(() => RoleCreateOrConnectWithoutRole_permissionsInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutRole_permissionsInput)
    connectOrCreate?: RoleCreateOrConnectWithoutRole_permissionsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'key_code'>;
}
