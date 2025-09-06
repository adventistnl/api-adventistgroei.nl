import { registerEnumType } from '@nestjs/graphql';

export enum DepartmentScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    church_id = "church_id",
    name = "name",
    description = "description",
    annual_budget = "annual_budget",
    contact_id = "contact_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(DepartmentScalarFieldEnum, { name: 'DepartmentScalarFieldEnum', description: undefined })
