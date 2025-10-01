import { registerEnumType } from '@nestjs/graphql';

export enum SpecialProjectsScalarFieldEnum {
    id = "id",
    department_id = "department_id",
    institution_id = "institution_id",
    project_id = "project_id",
    justification_note = "justification_note",
    budget = "budget",
    subsidy_statuses_id = "subsidy_statuses_id",
    type = "type",
    location_church_plant = "location_church_plant",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(SpecialProjectsScalarFieldEnum, { name: 'SpecialProjectsScalarFieldEnum', description: undefined })
