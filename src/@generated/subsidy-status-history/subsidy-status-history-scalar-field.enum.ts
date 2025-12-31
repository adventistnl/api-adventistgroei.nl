import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyStatusHistoryScalarFieldEnum {
    id = "id",
    subsidy_request_id = "subsidy_request_id",
    status_id = "status_id",
    previous_status_id = "previous_status_id",
    reason = "reason",
    changed_by = "changed_by",
    changed_at = "changed_at",
    created_at = "created_at",
    updated_at = "updated_at",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(SubsidyStatusHistoryScalarFieldEnum, { name: 'SubsidyStatusHistoryScalarFieldEnum', description: undefined })
