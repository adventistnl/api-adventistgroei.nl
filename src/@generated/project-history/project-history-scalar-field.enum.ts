import { registerEnumType } from '@nestjs/graphql';

export enum ProjectHistoryScalarFieldEnum {
    id = "id",
    project_id = "project_id",
    user_id = "user_id",
    type = "type",
    comment = "comment",
    field_name = "field_name",
    old_value = "old_value",
    new_value = "new_value",
    metadata = "metadata",
    created_at = "created_at"
}


registerEnumType(ProjectHistoryScalarFieldEnum, { name: 'ProjectHistoryScalarFieldEnum', description: undefined })
