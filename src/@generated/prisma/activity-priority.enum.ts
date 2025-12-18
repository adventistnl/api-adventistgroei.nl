import { registerEnumType } from '@nestjs/graphql';

export enum ActivityPriority {
    URGENT = "URGENT",
    HIGH = "HIGH",
    MEDIUM = "MEDIUM",
    LOW = "LOW"
}


registerEnumType(ActivityPriority, { name: 'ActivityPriority', description: undefined })
