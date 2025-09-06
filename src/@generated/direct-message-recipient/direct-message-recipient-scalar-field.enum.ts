import { registerEnumType } from '@nestjs/graphql';

export enum DirectMessageRecipientScalarFieldEnum {
    id = "id",
    direct_message_id = "direct_message_id",
    recipient_user_id = "recipient_user_id",
    recipient_role_id = "recipient_role_id",
    read_at = "read_at",
    sent_at = "sent_at",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(DirectMessageRecipientScalarFieldEnum, { name: 'DirectMessageRecipientScalarFieldEnum', description: undefined })
