import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutRole_permissionsInput } from './role-update-without-role-permissions.input';

@InputType()
export class RoleUpdateToOneWithWhereWithoutRole_permissionsInput {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => RoleUpdateWithoutRole_permissionsInput, {nullable:false})
    @Type(() => RoleUpdateWithoutRole_permissionsInput)
    data!: RoleUpdateWithoutRole_permissionsInput;
}
