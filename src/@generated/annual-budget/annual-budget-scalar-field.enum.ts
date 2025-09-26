import { registerEnumType } from '@nestjs/graphql';

export enum AnnualBudgetScalarFieldEnum {
    id = "id",
    year = "year",
    planned_budget = "planned_budget",
    total_expenses = "total_expenses",
    balance = "balance",
    notes = "notes",
    approved_by = "approved_by",
    status = "status",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(AnnualBudgetScalarFieldEnum, { name: 'AnnualBudgetScalarFieldEnum', description: undefined })
