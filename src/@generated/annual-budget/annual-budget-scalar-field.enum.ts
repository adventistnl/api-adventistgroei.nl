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
    department_id = "department_id"
}


registerEnumType(AnnualBudgetScalarFieldEnum, { name: 'AnnualBudgetScalarFieldEnum', description: undefined })
