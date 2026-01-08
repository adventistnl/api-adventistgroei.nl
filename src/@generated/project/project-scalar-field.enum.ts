import { registerEnumType } from '@nestjs/graphql';

export enum ProjectScalarFieldEnum {
    id = "id",
    department_id = "department_id",
    title = "title",
    description = "description",
    budget = "budget",
    subsidized_budget = "subsidized_budget",
    balance = "balance",
    owner_id = "owner_id",
    language_preference = "language_preference",
    type = "type",
    is_private = "is_private",
    required_volunteers = "required_volunteers",
    start_at = "start_at",
    end_at = "end_at",
    created_at = "created_at",
    updated_at = "updated_at",
    deadline = "deadline",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by",
    event_id = "event_id",
    institution_id = "institution_id",
    church_id = "church_id"
}


registerEnumType(ProjectScalarFieldEnum, { name: 'ProjectScalarFieldEnum', description: undefined })
