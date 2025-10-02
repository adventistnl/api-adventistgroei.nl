import { registerEnumType } from '@nestjs/graphql';

export enum EntityType {
    INSTITUTION = "INSTITUTION",
    REGION = "REGION",
    CHURCH = "CHURCH",
    DEPARTMENT = "DEPARTMENT",
    USER = "USER"
}


registerEnumType(EntityType, { name: 'EntityType', description: undefined })
