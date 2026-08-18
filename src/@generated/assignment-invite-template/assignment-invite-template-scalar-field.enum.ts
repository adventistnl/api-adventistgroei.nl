import { registerEnumType } from '@nestjs/graphql';

export enum AssignmentInviteTemplateScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    name = "name",
    subject = "subject",
    body = "body",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(AssignmentInviteTemplateScalarFieldEnum, { name: 'AssignmentInviteTemplateScalarFieldEnum', description: undefined })
