import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
    id = "id",
    target_type = "target_type",
    target_id = "target_id",
    title = "title",
    description = "description",
    contact_id = "contact_id",
    type = "type",
    language_preference = "language_preference",
    max_participants = "max_participants",
    ticket_amount = "ticket_amount",
    subscription_expires_at = "subscription_expires_at",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(EventScalarFieldEnum, { name: 'EventScalarFieldEnum', description: undefined })
