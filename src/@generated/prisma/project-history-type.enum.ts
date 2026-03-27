import { registerEnumType } from '@nestjs/graphql';

export enum ProjectHistoryType {
    COMMENT = "COMMENT",
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    STATUS_CHANGED = "STATUS_CHANGED",
    BUDGET_UPDATED = "BUDGET_UPDATED",
    DEADLINE_UPDATED = "DEADLINE_UPDATED",
    OWNER_CHANGED = "OWNER_CHANGED",
    CO_OWNER_UPDATED = "CO_OWNER_UPDATED",
    DEPARTMENT_CHANGED = "DEPARTMENT_CHANGED",
    DELETED = "DELETED",
    RESTORED = "RESTORED",
    ADJUSTMENT_NEEDED = "ADJUSTMENT_NEEDED"
}


registerEnumType(ProjectHistoryType, { name: 'ProjectHistoryType', description: undefined })
