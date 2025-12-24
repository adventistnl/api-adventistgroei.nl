import { registerEnumType } from '@nestjs/graphql';

export enum ProjectActivityAssigneeScalarFieldEnum {
    id = "id",
    activity_id = "activity_id",
    user_id = "user_id",
    created_at = "created_at",
    created_by = "created_by"
}


registerEnumType(ProjectActivityAssigneeScalarFieldEnum, { name: 'ProjectActivityAssigneeScalarFieldEnum', description: undefined })
