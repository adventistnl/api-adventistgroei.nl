import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PermissionResolverName } from '../prisma/permission-resolver-name.enum';
import { PermissionGroup } from '../prisma/permission-group.enum';
import { RolePermission } from '../role-permission/role-permission.model';
import { PermissionCount } from './permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    key_code!: string;

    @Field(() => PermissionResolverName, {nullable:false})
    resolver_name!: `${PermissionResolverName}`;

    @Field(() => PermissionGroup, {nullable:true})
    group!: `${PermissionGroup}` | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => [RolePermission], {nullable:true})
    role_permissions?: Array<RolePermission>;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
