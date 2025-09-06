import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionScalarWhereInput } from './role-permission-scalar-where.input';
import { Type } from 'class-transformer';
import { RolePermissionUpdateManyMutationInput } from './role-permission-update-many-mutation.input';

@InputType()
export class RolePermissionUpdateManyWithWhereWithoutPermissionInput {

    @Field(() => RolePermissionScalarWhereInput, {nullable:false})
    @Type(() => RolePermissionScalarWhereInput)
    where!: RolePermissionScalarWhereInput;

    @Field(() => RolePermissionUpdateManyMutationInput, {nullable:false})
    @Type(() => RolePermissionUpdateManyMutationInput)
    data!: RolePermissionUpdateManyMutationInput;
}
