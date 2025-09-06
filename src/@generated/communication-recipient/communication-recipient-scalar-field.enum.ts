import { registerEnumType } from '@nestjs/graphql';

export enum CommunicationRecipientScalarFieldEnum {
    id = "id",
    communication_id = "communication_id",
    target_type = "target_type",
    target_id = "target_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(CommunicationRecipientScalarFieldEnum, { name: 'CommunicationRecipientScalarFieldEnum', description: undefined })
