import { registerEnumType } from '@nestjs/graphql';

export enum AssignmentRequestScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    church_id = "church_id",
    date = "date",
    user_id = "user_id",
    type = "type",
    status = "status",
    template_id = "template_id",
    created_at = "created_at",
    decided_at = "decided_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(AssignmentRequestScalarFieldEnum, { name: 'AssignmentRequestScalarFieldEnum', description: undefined })
