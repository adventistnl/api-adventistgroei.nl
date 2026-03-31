import { registerEnumType } from '@nestjs/graphql';

export enum BudgetTransactionScalarFieldEnum {
    id = "id",
    annual_budget_id = "annual_budget_id",
    type = "type",
    delta_allocated = "delta_allocated",
    delta_expenses = "delta_expenses",
    description = "description",
    project_id = "project_id",
    subsidy_request_id = "subsidy_request_id",
    created_by = "created_by",
    created_at = "created_at"
}


registerEnumType(BudgetTransactionScalarFieldEnum, { name: 'BudgetTransactionScalarFieldEnum', description: undefined })
