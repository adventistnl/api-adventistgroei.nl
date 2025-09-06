import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyActivityScalarFieldEnum {
    id = "id",
    subsidy_request_id = "subsidy_request_id",
    name = "name",
    description = "description",
    budget_amount = "budget_amount",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(SubsidyActivityScalarFieldEnum, { name: 'SubsidyActivityScalarFieldEnum', description: undefined })
