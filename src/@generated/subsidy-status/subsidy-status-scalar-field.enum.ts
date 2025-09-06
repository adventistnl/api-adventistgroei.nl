import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyStatusScalarFieldEnum {
    id = "id",
    department_id = "department_id",
    assigned_to = "assigned_to",
    name = "name",
    description = "description",
    order = "order",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(SubsidyStatusScalarFieldEnum, { name: 'SubsidyStatusScalarFieldEnum', description: undefined })
