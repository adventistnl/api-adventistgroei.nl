import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionCreateManyRoleInput } from './role-permission-create-many-role.input';
import { Type } from 'class-transformer';

@InputType()
export class RolePermissionCreateManyRoleInputEnvelope {

    @Field(() => [RolePermissionCreateManyRoleInput], {nullable:false})
    @Type(() => RolePermissionCreateManyRoleInput)
    data!: Array<RolePermissionCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
