import { registerEnumType } from '@nestjs/graphql';

export enum ChurchType {
    PLANT = "PLANT",
    COMPANY = "COMPANY",
    STANDARD = "STANDARD"
}


registerEnumType(ChurchType, { name: 'ChurchType', description: undefined })
