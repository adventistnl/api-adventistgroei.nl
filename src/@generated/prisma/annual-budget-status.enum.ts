import { registerEnumType } from '@nestjs/graphql';

export enum AnnualBudgetStatus {
    PLANNED = "PLANNED",
    APROVED = "APROVED",
    IN_PROGRESS = "IN_PROGRESS",
    CLOSED = "CLOSED"
}


registerEnumType(AnnualBudgetStatus, { name: 'AnnualBudgetStatus', description: undefined })
