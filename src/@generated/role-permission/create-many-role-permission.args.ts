import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionCreateManyInput } from './role-permission-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRolePermissionArgs {

    @Field(() => [RolePermissionCreateManyInput], {nullable:false})
    @Type(() => RolePermissionCreateManyInput)
    data!: Array<RolePermissionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
