import { registerEnumType } from '@nestjs/graphql';

export enum AvailabilityStatus {
    AVAILABLE = "AVAILABLE",
    UNAVAILABLE = "UNAVAILABLE",
    VACATION = "VACATION"
}


registerEnumType(AvailabilityStatus, { name: 'AvailabilityStatus', description: undefined })
