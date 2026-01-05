import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyRequestPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}


registerEnumType(SubsidyRequestPriority, { name: 'SubsidyRequestPriority', description: undefined })
