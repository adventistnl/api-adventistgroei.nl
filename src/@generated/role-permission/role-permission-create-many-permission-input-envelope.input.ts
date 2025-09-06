import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionCreateManyPermissionInput } from './role-permission-create-many-permission.input';
import { Type } from 'class-transformer';

@InputType()
export class RolePermissionCreateManyPermissionInputEnvelope {

    @Field(() => [RolePermissionCreateManyPermissionInput], {nullable:false})
    @Type(() => RolePermissionCreateManyPermissionInput)
    data!: Array<RolePermissionCreateManyPermissionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
