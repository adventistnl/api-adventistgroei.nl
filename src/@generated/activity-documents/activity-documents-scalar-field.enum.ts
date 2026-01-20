import { registerEnumType } from '@nestjs/graphql';

export enum ActivityDocumentsScalarFieldEnum {
    id = "id",
    activity_id = "activity_id",
    file_url = "file_url",
    drive_file_id = "drive_file_id",
    filename = "filename",
    type = "type",
    is_validated = "is_validated",
    uploaded_by = "uploaded_by",
    created_at = "created_at",
    validated_at = "validated_at",
    project_activity_id = "project_activity_id",
    updated_at = "updated_at",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(ActivityDocumentsScalarFieldEnum, { name: 'ActivityDocumentsScalarFieldEnum', description: undefined })
