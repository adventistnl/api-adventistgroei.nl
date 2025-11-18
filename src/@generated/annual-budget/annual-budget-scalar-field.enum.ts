import { registerEnumType } from '@nestjs/graphql';

export enum AnnualBudgetScalarFieldEnum {
    id = "id",
    year = "year",
    planned_budget = "planned_budget",
    total_expenses = "total_expenses",
    balance = "balance",
    notes = "notes",
    description = "description",
    justification = "justification",
    approved_by = "approved_by",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by",
    status = "status",
    institution_id = "institution_id",
    church_id = "church_id",
    department_id = "department_id",
    requested_amount = "requested_amount",
    approved_amount = "approved_amount",
    requested_by = "requested_by",
    reviewed_by = "reviewed_by",
    submitted_date = "submitted_date",
    review_date = "review_date",
    approval_date = "approval_date",
    priority = "priority",
    category = "category",
    documents = "documents",
    is_locked = "is_locked",
    has_budget_record = "has_budget_record",
    entity_type = "entity_type"
}


registerEnumType(AnnualBudgetScalarFieldEnum, { name: 'AnnualBudgetScalarFieldEnum', description: undefined })
