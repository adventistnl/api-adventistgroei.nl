import { registerEnumType } from '@nestjs/graphql';

export enum ActivityStatus {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    ON_HOLD = "ON_HOLD"
}


registerEnumType(ActivityStatus, { name: 'ActivityStatus', description: undefined })
