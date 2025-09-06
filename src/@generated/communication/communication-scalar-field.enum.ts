import { registerEnumType } from '@nestjs/graphql';

export enum CommunicationScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    title = "title",
    content = "content",
    type = "type",
    priority = "priority",
    status = "status",
    language_preference = "language_preference",
    schedule_at = "schedule_at",
    published_at = "published_at",
    author_id = "author_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(CommunicationScalarFieldEnum, { name: 'CommunicationScalarFieldEnum', description: undefined })
