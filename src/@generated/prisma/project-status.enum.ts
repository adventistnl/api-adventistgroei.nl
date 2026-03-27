import { registerEnumType } from '@nestjs/graphql';

export enum ProjectStatus {
    DRAFT = "DRAFT",
    OPEN_REQUEST = "OPEN_REQUEST",
    IN_REVIEW = "IN_REVIEW",
    ADJUSTMENTS_NEEDED = "ADJUSTMENTS_NEEDED",
    IN_PROGRESS = "IN_PROGRESS",
    PENDING_RECEIPT = "PENDING_RECEIPT",
    WAITING_REFUND = "WAITING_REFUND",
    OVERDUE = "OVERDUE",
    ON_HOLD = "ON_HOLD",
    EXPIRED = "EXPIRED",
    CONCLUDED = "CONCLUDED"
}


registerEnumType(ProjectStatus, { name: 'ProjectStatus', description: undefined })
