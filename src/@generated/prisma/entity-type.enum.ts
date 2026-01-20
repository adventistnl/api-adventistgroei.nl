import { registerEnumType } from '@nestjs/graphql';

export enum EntityType {
    INSTITUTION = "INSTITUTION",
    REGION = "REGION",
    CHURCH = "CHURCH",
    INSTITUTION_DEPARTMENT = "INSTITUTION_DEPARTMENT",
    CHURCH_DEPARTMENT = "CHURCH_DEPARTMENT",
    USER = "USER"
}


registerEnumType(EntityType, { name: 'EntityType', description: undefined })
