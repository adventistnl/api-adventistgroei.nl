import { registerEnumType } from '@nestjs/graphql';

export enum AnnualBudgetStatus {
    PENDING = "PENDING",
    UNDER_REVIEW = "UNDER_REVIEW",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    REQUIRES_REVISION = "REQUIRES_REVISION"
}


registerEnumType(AnnualBudgetStatus, { name: 'AnnualBudgetStatus', description: undefined })
