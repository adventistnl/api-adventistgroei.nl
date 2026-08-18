import { registerEnumType } from '@nestjs/graphql';

export enum AssignmentStatus {
    DRAFT = "DRAFT",
    PENDING_CONFIRMATION = "PENDING_CONFIRMATION",
    CONFIRMED = "CONFIRMED",
    DECLINED = "DECLINED",
    LOCKED = "LOCKED"
}


registerEnumType(AssignmentStatus, { name: 'AssignmentStatus', description: undefined })
