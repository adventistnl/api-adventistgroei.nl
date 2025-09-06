import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    role_id = "role_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(UserRoleScalarFieldEnum, { name: 'UserRoleScalarFieldEnum', description: undefined })
