import { registerEnumType } from '@nestjs/graphql';

export enum AssignmentScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    church_id = "church_id",
    date = "date",
    user_id = "user_id",
    origin = "origin",
    status = "status",
    locked_at = "locked_at",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(AssignmentScalarFieldEnum, { name: 'AssignmentScalarFieldEnum', description: undefined })
