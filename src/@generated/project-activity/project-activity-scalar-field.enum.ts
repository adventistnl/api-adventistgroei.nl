import { registerEnumType } from '@nestjs/graphql';

export enum ProjectActivityScalarFieldEnum {
    id = "id",
    project_id = "project_id",
    name = "name",
    description = "description",
    budget_amount = "budget_amount",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by",
    deadline = "deadline",
    tags = "tags",
    custom_tags = "custom_tags",
    status = "status",
    priority = "priority",
    is_subsidized = "is_subsidized"
}


registerEnumType(ProjectActivityScalarFieldEnum, { name: 'ProjectActivityScalarFieldEnum', description: undefined })
