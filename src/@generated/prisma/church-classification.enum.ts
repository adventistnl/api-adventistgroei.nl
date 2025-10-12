import { registerEnumType } from '@nestjs/graphql';

export enum ChurchClassification {
    PLANT = "PLANT",
    COMPANY = "COMPANY",
    DEFAULT = "DEFAULT"
}


registerEnumType(ChurchClassification, { name: 'ChurchClassification', description: undefined })
