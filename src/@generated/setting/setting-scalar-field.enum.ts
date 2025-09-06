import { registerEnumType } from '@nestjs/graphql';

export enum SettingScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    key = "key",
    value = "value",
    description = "description",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(SettingScalarFieldEnum, { name: 'SettingScalarFieldEnum', description: undefined })
