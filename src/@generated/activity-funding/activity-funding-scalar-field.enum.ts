import { registerEnumType } from '@nestjs/graphql';

export enum ActivityFundingScalarFieldEnum {
    id = "id",
    activity_id = "activity_id",
    entity_type = "entity_type",
    entity_id = "entity_id",
    entity_contribution_amount = "entity_contribution_amount",
    entity_contribution_percent = "entity_contribution_percent",
    validated = "validated",
    created_at = "created_at",
    updated_at = "updated_at",
    project_activity_id = "project_activity_id"
}


registerEnumType(ActivityFundingScalarFieldEnum, { name: 'ActivityFundingScalarFieldEnum', description: undefined })
