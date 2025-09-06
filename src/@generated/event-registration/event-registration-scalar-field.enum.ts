import { registerEnumType } from '@nestjs/graphql';

export enum EventRegistrationScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    event_id = "event_id",
    status = "status",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(EventRegistrationScalarFieldEnum, { name: 'EventRegistrationScalarFieldEnum', description: undefined })
