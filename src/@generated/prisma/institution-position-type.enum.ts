import { registerEnumType } from '@nestjs/graphql';

export enum InstitutionPositionType {
    PRESIDENT = "PRESIDENT",
    SECRETARY = "SECRETARY",
    FINANCE_MANAGER = "FINANCE_MANAGER"
}


registerEnumType(InstitutionPositionType, { name: 'InstitutionPositionType', description: undefined })
