import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyRequestScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    requester_id = "requester_id",
    department_project_id = "department_project_id",
    church_id = "church_id",
    description = "description",
    total_budget = "total_budget",
    subsidy_statuses_id = "subsidy_statuses_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(SubsidyRequestScalarFieldEnum, { name: 'SubsidyRequestScalarFieldEnum', description: undefined })
