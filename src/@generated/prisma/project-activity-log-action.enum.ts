import { registerEnumType } from '@nestjs/graphql';

export enum ProjectActivityLogAction {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED",
    STATUS_CHANGED = "STATUS_CHANGED",
    PRIORITY_CHANGED = "PRIORITY_CHANGED",
    ASSIGNED = "ASSIGNED",
    UNASSIGNED = "UNASSIGNED",
    BUDGET_UPDATED = "BUDGET_UPDATED",
    DEADLINE_UPDATED = "DEADLINE_UPDATED",
    TAG_ADDED = "TAG_ADDED",
    TAG_REMOVED = "TAG_REMOVED",
    SUBSIDIZED_CHANGED = "SUBSIDIZED_CHANGED"
}


registerEnumType(ProjectActivityLogAction, { name: 'ProjectActivityLogAction', description: undefined })
