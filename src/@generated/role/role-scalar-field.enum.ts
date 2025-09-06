import { registerEnumType } from '@nestjs/graphql';

export enum RoleScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    key_code = "key_code",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(RoleScalarFieldEnum, { name: 'RoleScalarFieldEnum', description: undefined })
