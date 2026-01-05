import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyRequestScalarFieldEnum {
    id = "id",
    description = "description",
    total_budget = "total_budget",
    approved_amount = "approved_amount",
    rejection_reason = "rejection_reason",
    created_at = "created_at",
    updated_at = "updated_at",
    approved_at = "approved_at",
    created_by = "created_by",
    updated_by = "updated_by",
    approved_by = "approved_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by",
    institution_id = "institution_id",
    requester_id = "requester_id",
    department_id = "department_id",
    church_id = "church_id",
    priority = "priority",
    subsidy_statuses_id = "subsidy_statuses_id",
    project_id = "project_id"
}


registerEnumType(SubsidyRequestScalarFieldEnum, { name: 'SubsidyRequestScalarFieldEnum', description: undefined })
