import { registerEnumType } from '@nestjs/graphql';

export enum ProjectActivityLogScalarFieldEnum {
    id = "id",
    activity_id = "activity_id",
    user_id = "user_id",
    action = "action",
    field_name = "field_name",
    old_value = "old_value",
    new_value = "new_value",
    metadata = "metadata",
    created_at = "created_at"
}


registerEnumType(ProjectActivityLogScalarFieldEnum, { name: 'ProjectActivityLogScalarFieldEnum', description: undefined })
