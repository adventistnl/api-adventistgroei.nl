import { registerEnumType } from '@nestjs/graphql';

export enum AnnualBudgetEntityType {
    INSTITUTION = "INSTITUTION",
    CHURCH = "CHURCH",
    INSTITUTION_DEPARTMENT = "INSTITUTION_DEPARTMENT",
    CHURCH_DEPARTMENT = "CHURCH_DEPARTMENT"
}


registerEnumType(AnnualBudgetEntityType, { name: 'AnnualBudgetEntityType', description: undefined })
