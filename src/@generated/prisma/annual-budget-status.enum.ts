import { registerEnumType } from '@nestjs/graphql';

export enum AnnualBudgetStatus {
    DRAFT = "DRAFT",
    SUBMITTED = "SUBMITTED",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    REVISION_REQUESTED = "REVISION_REQUESTED",
    IN_PROGRESS = "IN_PROGRESS",
    CLOSED = "CLOSED"
}


registerEnumType(AnnualBudgetStatus, { name: 'AnnualBudgetStatus', description: undefined })
