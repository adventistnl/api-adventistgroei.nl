import { registerEnumType } from '@nestjs/graphql';

export enum FundingPoliciesScalarFieldEnum {
    id = "id",
    entity_type = "entity_type",
    entity_id = "entity_id",
    max_percent = "max_percent",
    annual_cap = "annual_cap",
    year = "year",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by"
}


registerEnumType(FundingPoliciesScalarFieldEnum, { name: 'FundingPoliciesScalarFieldEnum', description: undefined })
