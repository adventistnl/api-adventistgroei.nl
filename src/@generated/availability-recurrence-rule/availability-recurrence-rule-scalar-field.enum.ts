import { registerEnumType } from '@nestjs/graphql';

export enum AvailabilityRecurrenceRuleScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    user_id = "user_id",
    type = "type",
    status = "status",
    day_of_week = "day_of_week",
    start_date = "start_date",
    end_date = "end_date",
    effective_from = "effective_from",
    effective_until = "effective_until",
    note = "note",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(AvailabilityRecurrenceRuleScalarFieldEnum, { name: 'AvailabilityRecurrenceRuleScalarFieldEnum', description: undefined })
