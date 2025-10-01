import { registerEnumType } from '@nestjs/graphql';

export enum ActivityDocumentsScalarFieldEnum {
    id = "id",
    activity_id = "activity_id",
    file_url = "file_url",
    type = "type",
    is_validated = "is_validated",
    uploaded_by = "uploaded_by",
    created_at = "created_at",
    validated_at = "validated_at"
}


registerEnumType(ActivityDocumentsScalarFieldEnum, { name: 'ActivityDocumentsScalarFieldEnum', description: undefined })
