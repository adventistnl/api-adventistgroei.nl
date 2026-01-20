import { registerEnumType } from '@nestjs/graphql';

export enum ProjectStatus {
    DRAFT = "DRAFT",
    IN_PROGRESS = "IN_PROGRESS",
    IN_REVIEW = "IN_REVIEW",
    ON_HOLD = "ON_HOLD",
    EXPIRED = "EXPIRED",
    CONCLUDED = "CONCLUDED"
}


registerEnumType(ProjectStatus, { name: 'ProjectStatus', description: undefined })
