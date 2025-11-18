import { registerEnumType } from '@nestjs/graphql';

export enum AnnualBudgetPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    URGENT = "URGENT"
}


registerEnumType(AnnualBudgetPriority, { name: 'AnnualBudgetPriority', description: undefined })
