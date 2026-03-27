import { registerEnumType } from '@nestjs/graphql';

export enum AdjustmentStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    CLOSED = "CLOSED"
}


registerEnumType(AdjustmentStatus, { name: 'AdjustmentStatus', description: undefined })
