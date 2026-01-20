import { registerEnumType } from '@nestjs/graphql';

export enum AnnualBudgetCategory {
    OPERATIONAL = "OPERATIONAL",
    PROJECT = "PROJECT",
    MAINTENANCE = "MAINTENANCE",
    EMERGENCY = "EMERGENCY",
    EXPANSION = "EXPANSION"
}


registerEnumType(AnnualBudgetCategory, { name: 'AnnualBudgetCategory', description: undefined })
