import { registerEnumType } from '@nestjs/graphql';

export enum AvailabilityScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    user_id = "user_id",
    date = "date",
    status = "status",
    source = "source",
    recurrence_rule_id = "recurrence_rule_id",
    note = "note",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(AvailabilityScalarFieldEnum, { name: 'AvailabilityScalarFieldEnum', description: undefined })
