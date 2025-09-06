import { registerEnumType } from '@nestjs/graphql';

export enum DirectMessageScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    sender_id = "sender_id",
    title = "title",
    content = "content",
    status = "status",
    sent_at = "sent_at",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(DirectMessageScalarFieldEnum, { name: 'DirectMessageScalarFieldEnum', description: undefined })
