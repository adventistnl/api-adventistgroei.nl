import { registerEnumType } from '@nestjs/graphql';

export enum InstitutionPositionScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    position_type = "position_type",
    user_id = "user_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(InstitutionPositionScalarFieldEnum, { name: 'InstitutionPositionScalarFieldEnum', description: undefined })
