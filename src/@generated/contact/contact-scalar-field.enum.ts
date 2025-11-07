import { registerEnumType } from '@nestjs/graphql';

export enum ContactScalarFieldEnum {
    id = "id",
    name = "name",
    phone = "phone",
    mobile = "mobile",
    email = "email",
    country = "country",
    city = "city",
    state = "state",
    address = "address",
    full_address = "full_address",
    postal_code = "postal_code",
    website = "website",
    notes = "notes",
    is_primary = "is_primary",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(ContactScalarFieldEnum, { name: 'ContactScalarFieldEnum', description: undefined })
