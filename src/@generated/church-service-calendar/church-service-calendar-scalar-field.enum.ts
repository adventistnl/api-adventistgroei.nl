import { registerEnumType } from '@nestjs/graphql';

export enum ChurchServiceCalendarScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    church_id = "church_id",
    date = "date",
    has_service = "has_service",
    source = "source",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(ChurchServiceCalendarScalarFieldEnum, { name: 'ChurchServiceCalendarScalarFieldEnum', description: undefined })
