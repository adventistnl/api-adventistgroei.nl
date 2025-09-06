import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyReceiptScalarFieldEnum {
    id = "id",
    subsidy_activities_id = "subsidy_activities_id",
    file_path = "file_path",
    amount = "amount",
    approved = "approved",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(SubsidyReceiptScalarFieldEnum, { name: 'SubsidyReceiptScalarFieldEnum', description: undefined })
