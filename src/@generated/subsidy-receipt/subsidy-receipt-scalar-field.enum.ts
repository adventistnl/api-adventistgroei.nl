import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyReceiptScalarFieldEnum {
    id = "id",
    project_activities_id = "project_activities_id",
    file_url = "file_url",
    drive_file_id = "drive_file_id",
    filename = "filename",
    type = "type",
    amount = "amount",
    approved = "approved",
    is_validated = "is_validated",
    validated_at = "validated_at",
    validated_by = "validated_by",
    uploaded_by = "uploaded_by",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by",
    subsidy_request_id = "subsidy_request_id",
    subsidy_request_item_id = "subsidy_request_item_id"
}


registerEnumType(SubsidyReceiptScalarFieldEnum, { name: 'SubsidyReceiptScalarFieldEnum', description: undefined })
