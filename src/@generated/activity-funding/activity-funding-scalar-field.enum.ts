import { registerEnumType } from '@nestjs/graphql';

export enum ActivityFundingScalarFieldEnum {
    id = "id",
    activity_id = "activity_id",
    entity_type = "entity_type",
    entity_id = "entity_id",
    contribution_amount = "contribution_amount",
    contribution_percent = "contribution_percent",
    validated = "validated",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(ActivityFundingScalarFieldEnum, { name: 'ActivityFundingScalarFieldEnum', description: undefined })
