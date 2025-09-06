import { registerEnumType } from '@nestjs/graphql';

export enum ChurchScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    name = "name",
    region_id = "region_id",
    contact_id = "contact_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(ChurchScalarFieldEnum, { name: 'ChurchScalarFieldEnum', description: undefined })
