import { registerEnumType } from '@nestjs/graphql';

export enum PreacherRegionAccessScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    user_id = "user_id",
    region_id = "region_id",
    created_at = "created_at",
    created_by = "created_by"
}


registerEnumType(PreacherRegionAccessScalarFieldEnum, { name: 'PreacherRegionAccessScalarFieldEnum', description: undefined })
