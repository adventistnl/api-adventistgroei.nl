import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email",
    password = "password",
    gender = "gender",
    language_preference = "language_preference",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by",
    recieve_emails = "recieve_emails",
    contact_id = "contact_id",
    institution_id = "institution_id",
    church_id = "church_id",
    department_id = "department_id"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
