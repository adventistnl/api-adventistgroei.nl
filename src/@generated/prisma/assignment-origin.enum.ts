import { registerEnumType } from '@nestjs/graphql';

export enum AssignmentOrigin {
    ADMIN_ASSIGNED = "ADMIN_ASSIGNED",
    PREACHER_REQUESTED = "PREACHER_REQUESTED",
    CHURCH_INVITED = "CHURCH_INVITED",
    SELF_FILLED = "SELF_FILLED"
}


registerEnumType(AssignmentOrigin, { name: 'AssignmentOrigin', description: undefined })
