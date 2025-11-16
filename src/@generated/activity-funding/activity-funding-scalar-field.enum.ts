import { registerEnumType } from '@nestjs/graphql';

export enum ActivityFundingScalarFieldEnum {
    id = "id",
    activity_id = "activity_id",
    entity_contribution_amount = "entity_contribution_amount",
    entity_contribution_percent = "entity_contribution_percent",
    entity_type = "entity_type",
    entity_id = "entity_id",
    validated = "validated",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(ActivityFundingScalarFieldEnum, { name: 'ActivityFundingScalarFieldEnum', description: undefined })
