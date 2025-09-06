import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutRole_permissionsInput } from './role-create-without-role-permissions.input';

@InputType()
export class RoleCreateOrConnectWithoutRole_permissionsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'key_code'>;

    @Field(() => RoleCreateWithoutRole_permissionsInput, {nullable:false})
    @Type(() => RoleCreateWithoutRole_permissionsInput)
    create!: RoleCreateWithoutRole_permissionsInput;
}
