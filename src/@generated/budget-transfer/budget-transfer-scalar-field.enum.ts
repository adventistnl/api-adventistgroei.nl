import { registerEnumType } from '@nestjs/graphql';

export enum BudgetTransferScalarFieldEnum {
    id = "id",
    from_budget_id = "from_budget_id",
    to_budget_id = "to_budget_id",
    amount = "amount",
    type = "type",
    description = "description",
    created_at = "created_at",
    created_by = "created_by"
}


registerEnumType(BudgetTransferScalarFieldEnum, { name: 'BudgetTransferScalarFieldEnum', description: undefined })
