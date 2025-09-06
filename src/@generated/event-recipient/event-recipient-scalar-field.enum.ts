import { registerEnumType } from '@nestjs/graphql';

export enum EventRecipientScalarFieldEnum {
    id = "id",
    event_id = "event_id",
    target_type = "target_type",
    target_id = "target_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by",
    userId = "userId"
}


registerEnumType(EventRecipientScalarFieldEnum, { name: 'EventRecipientScalarFieldEnum', description: undefined })
