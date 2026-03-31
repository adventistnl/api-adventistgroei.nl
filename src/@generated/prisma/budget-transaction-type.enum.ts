import { registerEnumType } from '@nestjs/graphql';

export enum BudgetTransactionType {
    ALLOCATION_RESERVED = "ALLOCATION_RESERVED",
    ALLOCATION_RELEASED = "ALLOCATION_RELEASED",
    EXPENSE_APPROVED = "EXPENSE_APPROVED",
    REFUND_TOTAL = "REFUND_TOTAL",
    REFUND_PARTIAL = "REFUND_PARTIAL",
    MANUAL_ADJUSTMENT = "MANUAL_ADJUSTMENT"
}


registerEnumType(BudgetTransactionType, { name: 'BudgetTransactionType', description: undefined })
