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
    updated_at = "updated_at"
}


registerEnumType(ActivityFundingScalarFieldEnum, { name: 'ActivityFundingScalarFieldEnum', description: undefined })
