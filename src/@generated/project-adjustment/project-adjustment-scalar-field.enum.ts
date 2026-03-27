import { registerEnumType } from '@nestjs/graphql';

export enum ProjectAdjustmentScalarFieldEnum {
    id = "id",
    project_history_id = "project_history_id",
    status = "status",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(ProjectAdjustmentScalarFieldEnum, { name: 'ProjectAdjustmentScalarFieldEnum', description: undefined })
