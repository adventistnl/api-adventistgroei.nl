import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyRequestItemScalarFieldEnum {
    id = "id",
    subsidy_request_id = "subsidy_request_id",
    project_activity_id = "project_activity_id",
    requested_amount = "requested_amount",
    approved_amount = "approved_amount",
    notes = "notes",
    created_at = "created_at",
    updated_at = "updated_at",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(SubsidyRequestItemScalarFieldEnum, { name: 'SubsidyRequestItemScalarFieldEnum', description: undefined })
