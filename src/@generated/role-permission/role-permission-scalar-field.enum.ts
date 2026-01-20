import { registerEnumType } from '@nestjs/graphql';

export enum RolePermissionScalarFieldEnum {
    id = "id",
    role_id = "role_id",
    permission_id = "permission_id",
    is_essential = "is_essential",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(RolePermissionScalarFieldEnum, { name: 'RolePermissionScalarFieldEnum', description: undefined })
