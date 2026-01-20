import { registerEnumType } from '@nestjs/graphql';

export enum ActivityTags {
    EQUIPMENT = "EQUIPMENT",
    MATERIALS = "MATERIALS",
    SERVICES = "SERVICES",
    TRAVEL = "TRAVEL",
    EVENT = "EVENT",
    TRANSPORT = "TRANSPORT",
    MARKETING = "MARKETING",
    REFORM = "REFORM",
    TRAINING = "TRAINING",
    FEEDING = "FEEDING",
    ACCOMMODATION = "ACCOMMODATION"
}


registerEnumType(ActivityTags, { name: 'ActivityTags', description: undefined })
